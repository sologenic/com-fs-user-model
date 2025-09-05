# User

The user proto provides all the functionality required to interact with the user service.

## Parts of the proto

The proto has been split into multiple files to make it easier to maintain and update.

- `user.proto` - User details and related information
- `user-kyc.proto` - KYC details
- `user-fundings.proto` - Fundings details (wallet, bank accounts, broker accounts)
- `user-compliance.proto` - Compliance details (compliance questions, compliance answers)

And grpc related files are:
- `user-filters.proto` - Filters for the user and adminuser
- `user-grpc.proto` - GRPC service for the user + related messages
- `adminuser-grpc.proto` - GRPC service for the admin user

## User and user: How to be multi-organizational

The user service is multi-organizational. This means that a user can be part of multiple organizations. This is managed in the user's `OrganizationIDs` field.

```protobuf
message User {
    UserDetails User = 1;
    metadata.MetaData MetaData = 2;
    audit.Audit Audit = 3;
    repeated string OrganizationIDs = 4; // List of organizations where the user is part of (cloned into)
}
```

### Cloning a user

When cloning a user to a separate organization, the base `OrganizationID` in user details is set to the `OrganizationID` of the user being cloned to. This `UserDetails.OrganizationID` is redundant, but present (so call it legacy).

When cloning a user, in the organization configuration there is a configuration which determines which parts of the user are cloned.
Parts which are never cloned are:

- `User.OrganizationIDs` - TX Classified information
- `User.Audit` - TX related history of the user: Any organization starts its own history for the user from the moment the user is cloned into the organization.

A typical initial clone will contain:

- UserDetails except `BrokerAccount`, `BankAccount`, `ComplianceQuestions`, `TradeProfile`, `Wallets`, `KYCDetails`
- From `UserDetails.Wallets` the TX wallet is cloned (always)
- From `UserDetails.UserDocumentCompliance` the signed TX documents are cloned (always)

Often a clone will contain the following:

- `KYCDetails` - If KYC Reliance is enabled, the KYC details are cloned.

A clone will virtually never contain the following:

- `UserDetails.UserTradeProfile` - The user's trade profile: Tends to be very specific for stock trading, which is only 1-2 organizations per country/jurisdiction.

### Cloning changes to a user

Optionally other changes can be made to the user from the TX organization propagated to the user in the new organization. This is also controlled by the configuration in the organization.
This configuration in the organization is part of the audit records of the organization and behaviour can be changed over time by the organization. The organization has to be careful with this since there can be legal/regulatory consequences of these changes.

Similarly to the original cloning, there are fields which are never cloned, or cloned under certain conditions.
The never cloned fields are fields which are TX classified information, or only to be updated within a specific organization.
The conditionally cloned fields are fields where the organization can state that if a change occurs at TX, the change should be propagated to the user in the organization, or not.
Let's say a user changes their address: This can now be cloned to the user in all the organizations where the user is part of.

On cloning of certain fields, there can also be a condition of:

- Send notification to the organization admin(s)
- Review user in the organization (flag in userdetails) set to "review (e.g. true)"
- Disable user and set review flag to "review (e.g. true)"

Thus allowing the organization similar control as when changes where instantiated from within the organization.

## Client

The client for golang and typescript are provided in the `/client` directory.

## Start the service

The client is self initializing. For this it requires the following environment variable:

- `USER_STORE` - The host of the service. Host is in the format `host:port`
- `USER_STORE_TESTING` - Starts the GRPC service in testmode with an in memory buffer. Presence of the variable with the value `TRUE` is required to put the client in test mode.

If the client is included and the non of the env variable is set, the client panics.

## Building the required files

Generating these files can be done by running a build script with following command, which will also generate a build dir and add newly generated files and dir to git commit.

```sh
./bin/build.sh
```
