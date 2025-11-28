# User Documentation

## Table of Contents

- [Overview](#overview)
- [user-compliance.proto](#user-compliance)
  - [Messages](#messages)
    - [ComplianceQuestions](#compliancequestions)
    - [AlpacaDisclosures](#alpacadisclosures)
- [user-filters.proto](#user-filters)
  - [Messages](#messages)
    - [Filter](#filter)
    - [UserID](#userid)
- [user-fundings.proto](#user-fundings)
  - [Messages](#messages)
    - [Wallet](#wallet)
    - [BankAccount](#bankaccount)
    - [BrokerAccount](#brokeraccount)
- [user-kyc.proto](#user-kyc)
  - [Messages](#messages)
    - [IDNumber](#idnumber)
    - [Employment](#employment)
    - [Income](#income)
    - [EmployerContact](#employercontact)
- [user.proto](#user)
  - [Messages](#messages)
    - [UserDetails](#userdetails)
    - [User](#user)
    - [Social](#social)
    - [UserList](#userlist)
    - [StatusMessage](#statusmessage)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The User provides a comprehensive data structure for managing user within the system. This model supports status management: tracks status for administrative control, identification: provides unique identifiers for user, organizational context: links items to organizations via organizationid, and more. 

Key features of the {model_name.lower()} model include:
- **Status Management**: Tracks status for administrative control
- **Identification**: Provides unique identifiers for user
- **Organizational Context**: Links items to organizations via OrganizationID
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Pagination Support**: Provides offset-based pagination for collections

## user-compliance.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-compliance.proto` file defines the core user compliance model for user management. It provides message types for representing user compliance data and operations.

### Messages

#### ComplianceQuestions {#compliancequestions}

The `ComplianceQuestions` message represents a collection of compliancequestion with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Tolerance | `RiskTolerance` | Required | Tolerance field |
| Objective | `InvestmentObjective` | Required | Objective field |

**Use Cases:**
- Returning paginated lists of compliancequestion from queries or searches
- Implementing pagination in compliancequestion listing APIs
- Handling large compliancequestions efficiently

**Important Notes:**
- This message provides the compliancequestions representation

#### AlpacaDisclosures {#alpacadisclosures}

The `AlpacaDisclosures` message represents a collection of alpacadisclosure with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| RecordedAt | `google.protobuf.Timestamp` | Required | RecordedAt field |
| IsControlPerson | `bool` | Required | IsControlPerson field |
| IsAffiliatedExchangeOrFinra | `bool` | Required | IsAffiliatedExchangeOrFinra field |
| IsPoliticallyExposed | `bool` | Required | IsPoliticallyExposed field |
| ImmediateFamilyExposed | `bool` | Required | ImmediateFamilyExposed field |
| FundingSources | `FundingSource` | Optional | FundingSources field |

**Use Cases:**
- Returning paginated lists of alpacadisclosure from queries or searches
- Implementing pagination in alpacadisclosure listing APIs
- Handling large alpacadisclosures efficiently

**Important Notes:**
- This message provides the alpacadisclosures representation

## user-filters.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-filters.proto` file defines the core user filters model for user management. It provides message types for representing user filters data and operations. The file integrates with external utility libraries: `metadata.proto`.

### Messages

#### Filter {#filter}

The `Filter` message provides filter data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Status | `UserStatus` | Optional | Current status of this item (see related enum) |
| ExternalUserIDs | `string` | Optional | Unique identifier for the externalusers |
| WalletAddress | `string` | Optional | WalletAddress value |
| BrokerAccountID | `string` | Optional | Unique identifier for the brokeraccount |

**Use Cases:**
- Creating new filter records
- Retrieving filter information
- Updating filter data
- Tracking status for administrative purposes

**Important Notes:**
- The `Status` field determines the current state of this item
- The `ExternalUserIDs` field must match a valid identifier format
- The `BrokerAccountID` field must match a valid identifier format

#### UserID {#userid}

The `UserID` message provides userid data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Unique identifier for the user |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |

**Use Cases:**
- Creating new userid records
- Retrieving userid information
- Updating userid data
- Associating items with specific organizations

**Important Notes:**
- The `UserID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format

## user-fundings.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-fundings.proto` file defines the core user fundings model for user management. It provides message types for representing user fundings data and operations. The file integrates with external utility libraries: `order-properties.proto`.

### Messages

#### Wallet {#wallet}

The `Wallet` message provides wallet data and operations.

#### BankAccount {#bankaccount}

The `BankAccount` message provides bankaccount data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AccountName | `string` | Required | The accountname of this item |
| SWIFT | `string` | Required | SWIFT value |
| IBAN | `string` | Required | IBAN value |

**Use Cases:**
- Creating new bankaccount records
- Retrieving bankaccount information
- Updating bankaccount data

**Important Notes:**
- This message provides the bankaccount representation

#### BrokerAccount {#brokeraccount}

The `BrokerAccount` message provides brokeraccount data and operations.

## user-kyc.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-kyc.proto` file defines the core user kyc model for user management. It provides message types for representing user kyc data and operations.

### Messages

#### IDNumber {#idnumber}

The `IDNumber` message provides idnumber data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| PhoneNumber | `string` | Required | PhoneNumber value |
| EmailAddress | `string` | Required | EmailAddress value |
| AddressStreet1 | `string` | Required | AddressStreet1 value |
| AddressStreet2 | `string` | Required | AddressStreet2 value |
| AddressCity | `string` | Required | AddressCity value |
| AddressSubdivision | `string` | Required | AddressSubdivision value |
| AddressPostalCode | `string` | Required | AddressPostalCode value |
| CountryCode | `string` | Required | CountryCode value |
| SocialSecurityNumber | `string` | Required | SocialSecurityNumber value |
| IdentificationNumber | `string` | Required | Unique identifier for the identificationnumber |
| FirstName | `string` | Required | The firstname of this item |
| LastName | `string` | Required | The lastname of this item |

**Use Cases:**
- Creating new idnumber records
- Retrieving idnumber information
- Updating idnumber data

**Important Notes:**
- The `IdentificationNumber` field must match a valid identifier format

#### Employment {#employment}

The `Employment` message provides employment data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| EmployerName | `string` | Required | The employername of this item |
| JobTitle | `string` | Required | JobTitle value |
| StartDate | `google.protobuf.Timestamp` | Required | StartDate field |
| Type | `EmploymentType` | Required | Type classification for this item (see related enum) |
| Industry | `string` | Optional | Industry value |
| Income | `Income` | Required | Income field |
| Contact | `EmployerContact` | Required | Contact field |
| IsVerified | `bool` | Required | IsVerified field |
| VerifiedAt | `string` | Required | VerifiedAt value |

**Use Cases:**
- Creating new employment records
- Retrieving employment information
- Updating employment data

**Important Notes:**
- This message provides the employment representation

#### Income {#income}

The `Income` message provides income data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Amount | `float` | Required | Amount field |
| Currency | `string` | Required | Currency value |
| Frequency | `IncomeFrequency` | Required | Frequency field |

**Use Cases:**
- Creating new income records
- Retrieving income information
- Updating income data

**Important Notes:**
- This message provides the income representation

#### EmployerContact {#employercontact}

The `EmployerContact` message provides employercontact data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Name | `string` | Required | The name of this item |
| Email | `string` | Required | Email value |
| Phone | `string` | Required | Phone value |
| Address | `string` | Required | Address value |

**Use Cases:**
- Creating new employercontact records
- Retrieving employercontact information
- Updating employercontact data

**Important Notes:**
- This message provides the employercontact representation

## user.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user.proto` file defines the core user model for user management. It provides message types for representing user data and operations. The file integrates with external utility libraries: `metadata.proto`, `audit.proto`, `role.proto`.

### Messages

#### UserDetails {#userdetails}

The `UserDetails` message contains all the core information about a user, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| KYCDetails | `UserKYCDetails` | Required | KYCDetails field |
| UserDocumentCompliance | `document.UserDocumentCompliance` | Required | UserDocumentCompliance field |
| UserTradeProfile | `tradeprofile.UserTradeProfile` | Optional | UserTradeProfile field |
| ComplianceQuestions | `ComplianceQuestions` | Optional | ComplianceQuestions field |
| BrokerAccounts | `BrokerAccount` | Optional | BrokerAccounts field |
| BankAccounts | `BankAccount` | Optional | BankAccounts field |
| UISettings | `UISettings` | Required | UISettings field |
| DataFeedAccounts | `DataFeedAccounts` | Optional | DataFeedAccounts field |

**Use Cases:**
- Creating new user records with complete information
- Updating user information

**Important Notes:**
- This message provides the userdetails representation

#### User {#user}

The `User` message provides user data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| User | `UserDetails` | Required | User field |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new user records
- Retrieving user information
- Updating user data

**Important Notes:**
- This message provides the user representation

#### Social {#social}

The `Social` message provides social data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| URL | `string` | Required | URL value |
| Type | `SocialType` | Required | Type classification for this item (see related enum) |

**Use Cases:**
- Creating new social records
- Retrieving social information
- Updating social data

**Important Notes:**
- This message provides the social representation

#### UserList {#userlist}

The `UserList` message represents a collection of userlist with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Users | `User` | Optional | Users field |
| Offset | `int32` | Optional | Offset field |

**Use Cases:**
- Returning paginated lists of userlist from queries or searches
- Implementing pagination in userlist listing APIs
- Handling large userlist efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### StatusMessage {#statusmessage}

The `StatusMessage` message provides statusmessage data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Unique identifier for the user |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| Status | `UserStatus` | Required | Current status of this item (see related enum) |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |

**Use Cases:**
- Creating new statusmessage records
- Retrieving statusmessage information
- Updating statusmessage data
- Associating items with specific organizations
- Tracking status for administrative purposes

**Important Notes:**
- The `UserID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `Status` field determines the current state of this item

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `user-compliance.proto`, `user-filters.proto`, `user-fundings.proto`, `user-kyc.proto`, `user.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `user-compliance.proto`, `user-filters.proto`, `user-fundings.proto`, `user-kyc.proto`, `user.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
  - `sologenic/com-fs-utils-lib/models/role/role.proto`
  - `sologenic/com-fs-utils-lib/models/language/language.proto`
  - `sologenic/com-fs-trade-profile-model/tradeprofile.proto`
