# User Model Documentation

## Table of Contents

- [Overview](#overview)
- [user.proto](#userproto)
  - [Messages](#messages)
    - [UserDetails](#userdetails)
    - [User](#user)
    - [UserList](#userlist)
    - [StatusMessage](#statusmessage)
    - [UISettings](#uisettings)
    - [DataFeedAccounts](#datafeedaccounts)
    - [DxFeed](#dxfeed)
  - [Enums](#enums)
    - [UserStatus](#userstatus)
    - [Theme](#theme)
- [user-fundings.proto](#user-fundingsproto)
  - [Messages](#messages-1)
    - [Wallet](#wallet)
    - [BrokerAccount](#brokeraccount)
  - [Enums](#enums-1)
    - [SignerType](#signertype)
    - [WalletType](#wallettype)
- [user-filters.proto](#user-filtersproto)
  - [Messages](#messages-2)
    - [Filter](#filter)
    - [UserID](#userid)
- [user-kyc.proto](#user-kycproto)
  - [Messages](#messages-4)
    - [UserKYCDetails](#userkycdetails)
  - [Enums](#enums-3)
    - [KYCStatus](#kycstatus)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The User Model provides a comprehensive data structure for managing users within the system. This model supports user identification, authentication, compliance, KYC (Know Your Customer) verification, funding sources, and organizational context. It is designed to handle complex user management scenarios including multi-organization support, compliance questionnaires, and integration with external systems.

Key features of the user model include:

- **User Identification**: Provides unique identifiers including Firebase Auth UID, external user IDs, and organization-specific identifiers
- **KYC Management**: Comprehensive KYC details including personal information and verification status tracking
- **Compliance Support**: Multiple compliance questionnaires (USA, Alpaca Disclosures) with risk tolerance and investment objective tracking, plus file attachment support for compliance form answers
- **Funding Sources**: Support for wallets and broker accounts with multiple account types
- **Organizational Context**: Multi-organization support allowing users to be cloned into different organizations
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes and access
- **Role-Based Access**: Supports role assignment for access control
- **Status Management**: Tracks user status for administrative control (Active, Deactivated, Pending Approval)
- **UI Customization**: User interface settings including theme preferences
- **Data Feed Integration**: Support for external data feed accounts (e.g., DxFeed)
- **Commission Settings**: User-level commission overrides for broker API integrations

## user.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user.proto` file defines the core user model for user management. It provides message types for representing user data, status management, UI settings, and data feed accounts. The file integrates with external utility libraries including metadata, audit, role, language, trade profile, document, commission, and compliance models.

**Note on ComplianceFormAnswer**: The `ComplianceFormAnswers` field uses the `compliance.ComplianceFormAnswer` type from the compliance model. Each `ComplianceFormAnswer` contains:
- `ComplianceID`: UUID reference to the compliance form
- `Answers`: Array of `QuestionAnswer` messages, each containing:
  - `Question`: The question text (for consistency without static indexes)
  - `Values`: Answer values as strings (single value for radio/text, multiple for checkbox)
  - `Files`: Repeated File field allowing file attachments (e.g., documents, images) with each answer
- `FormStatus`: Status of the form (enum: FORM_STATUS_SUBMITTED = form submitted by user, FORM_STATUS_RE_VALIDATE = needs re-validation, FORM_STATUS_REJECTED = rejected by admin requiring resubmission)
- `SubmittedAt`: Timestamp when the form was submitted (set by backend)

The File structure includes a description, optionality setting, and hash for integrity verification. By storing file descriptions in answers, the admin interface can render answers even if the questionnaire structure is later updated. Answer values are stored as strings and should be parsed based on the question's ResponseType (INT, STRING, BOOLEAN) for validation.

### Messages

#### UserDetails {#userdetails}

The `UserDetails` message contains all the core information about a user, including essential details, authentication information, compliance data, and organizational context.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Firebase Auth UID - the primary authentication identifier |
| FirstName | `string` | Required | User's first name |
| LastName | `string` | Required | User's last name |
| Address | `string` | Required | User's address |
| Avatar | `string` | Required | URL or path to user's avatar image |
| Alias | `string` | Required | User's nickname or display name |
| Description | `string` | Required | Additional descriptive information about the user |
| Status | `UserStatus` | Required | Current status of the user (see UserStatus enum) |
| Wallets | `repeated Wallet` | Optional | List of wallet addresses associated with the user |
| Language | `language.Lang` | Required | User's preferred language setting |
| ExternalUserID | `string` | Required | UUID for the external user identifier, used in communication with KYC providers or other places where an anonymous ID is required |
| OrganizationID | `string` | Required | UUID of the current organization the user is cloned into |
| Role | `role.Role` | Required | User's role. A retail user will always have a role of "NORMAL_USER" |
| TradeProfile | `tradeprofile.TradeProfileDetails` | Optional | Trade profile details for the user |
| KYCInquiries | `repeated string` | Optional | Array of KYC integration IDs associated with the user |
| KYCDetails | `UserKYCDetails` | Required | Complete KYC details including personal information and identification |
| UserDocumentCompliance | `document.UserDocumentCompliance` | Required | Document compliance information for the user |
| KYCStatus | `KYCStatus` | Required | Status of KYC verification (e.g., PENDING, APPROVED, REJECTED) |
| UserTradeProfile | `tradeprofile.UserTradeProfile` | Optional | User trade profile information |
| BrokerAccounts | `repeated BrokerAccount` | Optional | List of broker accounts associated with the user |
| UISettings | `UISettings` | Required | User interface settings including theme preferences |
| CommissionSettings | `commission.CommissionSettings` | Optional | Broker API specific commission fields for user level (overrides organization level) |
| DataFeedAccounts | `DataFeedAccounts` | Optional | Data feed account configurations |
| AllowedJurisdictions | `repeated string` | Optional | ISO 3166-1 alpha-3 country codes (e.g., "USA", "CAD") indicating allowed jurisdictions |
| EmailAddress | `string` | Required | Email address for the user, often retrieved from the authentication provider |
| ComplianceFormAnswers | `repeated compliance.ComplianceFormAnswer` | Optional | Compliance form answers for the user. Each answer can include multiple file attachments (see compliance model documentation) |
| ReferredBy | `string` | Optional | User ID of the referrer who referred this user during signup or partner code |
| ReferralCount | `int32` | Optional | Number of referrals made by this user |
| ReferralLimit | `int32` | Optional | Maximum number of referrals this user can receive (admin override only) |
| ReferralAmountReceived | `int32` | Optional | Amount of TX the referring user received from referrals (non-mutable by user) |
| ReferralAmount | `int32` | Optional | Amount of TX associated with this user to be distributed to new users (admin override only) |
| ReferralPaidAt | `google.protobuf.Timestamp` | Optional | Timestamp when the referral reward was paid |

**Use Cases:**

- Creating new user records with complete information
- Updating user information and preferences
- Retrieving user profile data for display
- Managing user status for administrative purposes
- Associating users with specific organizations
- Assigning roles for permission management
- Tracking KYC and compliance status
- Managing user funding sources (wallets, broker accounts)
- Configuring user-specific commission settings
- Storing compliance form responses with file attachments

**Important Notes:**

- The `UserID` field must match a valid Firebase Auth UID format
- The `ExternalUserID` field must be a valid UUID format
- The `OrganizationID` must be a valid UUID format
- The `Status` field determines the current state of the user and affects access permissions
- The `KYCStatus` field tracks the verification state and should be updated as KYC processes complete
- `AllowedJurisdictions` uses ISO 3166-1 alpha-3 format (3-letter country codes)
- Retail users always have a role of "NORMAL_USER"
- Commission settings at the user level override organization-level settings
- `ComplianceFormAnswers` contains `ComplianceFormAnswer` messages, each with:
  - `ComplianceID`: Reference to the compliance form
  - `Answers`: Array of `QuestionAnswer` messages with question text, values (as strings), and optional `repeated File` attachments
  - `FormStatus`: Tracks form submission status (FORM_STATUS_SUBMITTED, FORM_STATUS_RE_VALIDATE, FORM_STATUS_REJECTED)
  - `SubmittedAt`: Optional timestamp of form submission (set by backend when form is submitted)
  - Files include a description, optionality setting, and hash for integrity verification. Answer values are stored as strings and should be parsed based on the question's ResponseType for validation.

#### User {#user}

The `User` message wraps `UserDetails` with metadata and audit information, providing a complete user record with tracking capabilities.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| User | `UserDetails` | Required | Complete user details |
| MetaData | `metadata.MetaData` | Required | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking changes and access |
| OrganizationIDs | `repeated string` | Optional | List of organizations where the user is part of (cloned into) |

**Use Cases:**

- Storing complete user records in databases
- Retrieving user information with audit trails
- Tracking which organizations a user belongs to
- Maintaining version and network information for user records

**Important Notes:**

- All `OrganizationIDs` must be valid UUID formats
- The `MetaData` and `Audit` fields are required for proper tracking and versioning
- This message represents the complete user entity as stored in the system

#### UserList {#userlist}

The `UserList` message represents a paginated collection of users for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Users | `repeated User` | Optional | List of user records |
| Offset | `int32` | Optional | Offset value for pagination |

**Use Cases:**

- Returning paginated lists of users from queries or searches
- Implementing pagination in user listing APIs
- Handling large user collections efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**

- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results
- The `Users` field may be empty if no users match the query criteria

#### StatusMessage {#statusmessage}

The `StatusMessage` message is used to update or communicate user status changes.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Unique identifier for the user |
| OrganizationID | `string` | Required | UUID of the organization this status applies to |
| Status | `UserStatus` | Required | New status value for the user (see UserStatus enum) |
| Network | `metadata.Network` | Optional | Metadata information including network and version details |
| Audit | `audit.Audit` | Required | Audit trail information for tracking the status change |

**Use Cases:**

- Updating user status (e.g., activating, deactivating, or marking for approval)
- Communicating status changes between services
- Tracking status change history through audit trails

**Important Notes:**

- The `UserID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `Status` field determines the new state of the user
- The `Audit` field should be populated to track who made the change and when

#### UISettings {#uisettings}

The `UISettings` message stores user interface preferences and customization settings.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Theme | `Theme` | Required | User's preferred theme (see Theme enum) |

**Use Cases:**

- Storing user UI preferences
- Applying theme settings when the user logs in
- Allowing users to customize their interface experience

**Important Notes:**

- The `Theme` field determines the visual appearance of the user interface
- Currently supports DARK and LIGHT themes

#### DataFeedAccounts {#datafeedaccounts}

The `DataFeedAccounts` message contains configuration for external data feed accounts.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| DxFeed | `DxFeed` | Optional | DxFeed account configuration |

**Use Cases:**

- Configuring external data feed accounts for users
- Managing data feed access and credentials
- Supporting multiple data feed providers

**Important Notes:**

- Currently supports DxFeed, but the structure allows for additional feed types in the future

#### DxFeed {#dxfeed}

The `DxFeed` message represents a DxFeed data feed account configuration.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AccountID | `string` | Required | Unique identifier for the DxFeed account |

**Use Cases:**

- Storing DxFeed account identifiers
- Associating users with specific data feed accounts
- Managing data feed access

**Important Notes:**

- The `AccountID` field must match a valid DxFeed account identifier format

### Enums

#### UserStatus {#userstatus}

The `UserStatus` enum defines the possible states for a user account, allowing for classification and access control.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_USERSTATUS | 0 | Default/unused value (protobuf convention) - should not be used |
| ACTIVE | 1 | User account is active and can access the system |
| DEACTIVATED | 2 | User account has been deactivated by an administrator |

**Use Cases:**

- Setting user account status during registration or administrative actions
- Filtering users by status in queries
- Enforcing access control based on user status
- Managing user lifecycle (activation, deactivation, approval workflows)

**Important Notes:**

- Values with number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid status values should be used in production code
- UserStatus changes should be tracked in audit trails for compliance purposes
- Status changes may trigger notifications or workflow actions

#### Theme {#theme}

The `Theme` enum defines the available user interface themes.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_THEME | 0 | Default/unused value (protobuf convention) - should not be used |
| DARK | 1 | Dark theme for the user interface |
| LIGHT | 2 | Light theme for the user interface |

**Use Cases:**

- Setting user interface theme preferences
- Applying theme settings on login or user preference changes
- Allowing users to switch between themes

**Important Notes:**

- Values with number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid theme values should be used in production code
- Theme changes should be persisted and applied consistently across the application

## user-fundings.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-fundings.proto` file defines funding source models for users, including wallets, and broker accounts. It provides message types for representing different funding methods and account types. The file integrates with external utility libraries including order-properties for broker information.

### Messages

#### Wallet {#wallet}

The `Wallet` message represents a cryptocurrency wallet address associated with a user.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Address | `string` | Required | The wallet address (blockchain address) |
| Alias | `string` | Required | User-friendly name or alias for the wallet |
| Type | `WalletType` | Required | Type of wallet account (see WalletType enum) |
| SignerType | `SignerType` | Required | Type of signer/wallet application used (see SignerType enum) |
| Organizations | `repeated string` | Optional | List of organizations linked to this wallet address |

**Use Cases:**

- Storing user wallet addresses for cryptocurrency transactions
- Associating wallets with specific account types (TFSA, RRSP, Standard)
- Tracking which organizations have access to a wallet
- Managing wallet signing methods and applications

**Important Notes:**

- The `Address` field should contain a valid blockchain address
- The `Type` field determines the account classification (e.g., tax-advantaged accounts)
- The `SignerType` indicates which wallet application is used for signing transactions
- A wallet can be associated with multiple organizations

#### BrokerAccount {#brokeraccount}

The `BrokerAccount` message represents a broker account associated with a user for trading operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AccountID | `string` | Required | User's identifier in the broker account system |
| Broker | `orderproperties.ClearingBroker` | Required | Clearing broker identifier (e.g., "RQD") |
| OrganizationID | `string` | Required | UUID of the organization/broker identifier |
| Profiles | `repeated string` | Optional | Bank account profiles associated with the broker account |

**Use Cases:**

- Linking users to broker accounts for trading
- Managing clearing broker relationships
- Supporting multiple broker accounts per user

**Important Notes:**

- The `AccountID` field must match a valid identifier in the broker's system
- The `Broker` field uses the ClearingBroker enum from order-properties
- The `OrganizationID` must be a valid UUID format
- The `Profiles` field links to bank account profiles that can be used for funding

### Enums

#### SignerType {#signertype}

The `SignerType` enum defines the types of wallet applications or signing methods that can be used for cryptocurrency transactions.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USER_SIGNETTYPE | 0 | Default/unused value (protobuf convention) - should not be used |
| MOBILE_APP | 1 | Mobile application wallet |
| BROWSER_LEAP | 2 | Browser-based Leap wallet |
| BROWSER_COSMOSTATION | 3 | Browser-based Cosmostation wallet |
| BROWSER_KEPLR | 4 | Browser-based Keplr wallet |

**Use Cases:**

- Identifying which wallet application a user prefers
- Enforcing signing method requirements
- Filtering wallets by signer type
- Supporting different wallet integrations

**Important Notes:**

- Values with number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid signer type values should be used in production code
- Different signer types may have different security and integration requirements

#### WalletType {#wallettype}

The `WalletType` enum defines the types of wallet accounts, particularly for tax-advantaged accounts.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_WALLETTYPE | 0 | Default/unused value (protobuf convention) - should not be used |
| TFSA | 1 | Tax-Free Savings Account (Canadian tax-advantaged account) |
| RRSP | 2 | Registered Retirement Savings Plan (Canadian retirement account) |
| STANDARD | 3 | Standard wallet account (no special tax treatment) |

**Use Cases:**

- Classifying wallets by account type for tax reporting
- Enforcing account-specific rules and restrictions
- Filtering wallets by type
- Supporting different regulatory requirements for different account types

**Important Notes:**

- Values with number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid wallet type values should be used in production code
- TFSA and RRSP are Canadian-specific account types with specific tax and regulatory requirements
- Account type may affect trading restrictions and tax reporting

## user-filters.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-filters.proto` file defines filtering and query messages for user management operations. It provides message types for searching, filtering, and retrieving users based on various criteria including user IDs, status, organization, wallet addresses, and broker accounts. The file integrates with external utility libraries including metadata for network information.

### Messages

#### Filter {#filter}

The `Filter` message provides comprehensive filtering capabilities for querying users with support for multiple criteria and pagination.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserIDs | `repeated string` | Optional | List of specific user IDs to filter by |
| Network | `metadata.Network` | Optional | Network metadata for filtering by network/version |
| OrganizationID | `string` | Required | UUID of the organization to filter users by |
| Offset | `int32` | Optional | Offset value for pagination (starting position) |
| Limit | `int32` | Optional | Maximum number of results to return |
| InquiryID | `string` | Optional | KYC inquiry ID to filter users by |
| Status | `UserStatus` | Optional | Filter users by status (see UserStatus enum) |
| ExternalUserIDs | `repeated string` | Optional | List of external user IDs to filter by |
| WalletAddress | `string` | Optional | Filter users by wallet address |
| BrokerAccountID | `string` | Optional | Filter users by broker account ID |

**Use Cases:**

- Searching for users by multiple criteria
- Filtering users by organization
- Finding users by wallet address
- Filtering users by KYC inquiry
- Implementing paginated user queries
- Filtering users by status for administrative purposes
- Finding users by broker account association

**Important Notes:**

- The `OrganizationID` field is required and must be a valid UUID format
- The `UserIDs` field accepts multiple user IDs for batch queries
- The `Offset` and `Limit` fields work together for pagination
- If `Offset` is not set (or is 0), results start from the beginning
- The `Status` field filters by UserStatus enum values
- The `WalletAddress` field can be used to find which user owns a specific wallet
- The `BrokerAccountID` field links users to specific broker accounts

#### UserID {#userid}

The `UserID` message provides a simple identifier structure for user lookup operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| UserID | `string` | Required | Unique identifier for the user |
| OrganizationID | `string` | Required | UUID of the organization this user belongs to |
| Network | `metadata.Network` | Optional | Network metadata information including network and version details |

**Use Cases:**

- Simple user lookup by ID and organization
- Passing user identifiers between services
- Specifying user context with organization and network information

**Important Notes:**

- The `UserID` field must match a valid user identifier format
- The `OrganizationID` must be a valid UUID format
- The `Network` field is optional but can be used for network-specific queries

## user-kyc.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-kyc.proto` file defines KYC (Know Your Customer) models for user management. It provides message types for representing KYC details including personal identification and verification status. The file includes an enum for KYC status tracking.

### Messages

#### UserKYCDetails {#userkycdetails}

The `UserKYCDetails` message contains comprehensive personal information required for KYC verification.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Birthdate | `string` | Required | User's date of birth |
| PhoneNumber | `string` | Required | User's phone number |
| EmailAddress | `string` | Required | User's email address |
| AddressStreet1 | `string` | Required | Primary street address |
| AddressStreet2 | `string` | Required | Secondary address line (apartment, suite, etc.) |
| AddressCity | `string` | Required | City name |
| AddressSubdivision | `string` | Required | State, province, or subdivision |
| AddressPostalCode | `string` | Required | Postal or ZIP code |
| CountryCode | `string` | Required | Country code |
| SocialSecurityNumber | `string` | Required | Social Security Number (SSN) or equivalent |
| IdentificationNumber | `string` | Required | Government-issued identification number |
| FirstName | `string` | Required | User's first name |
| LastName | `string` | Required | User's last name |
| MiddleName | `string` | Optional | User's middle name |
| AddressCountryCode | `string` | Optional | Country code for the address |
| SelectedCountryCode | `string` | Optional | Selected country code |
| SelectedIDClass | `string` | Optional | Selected identification class |
| ExpirationDate | `string` | Optional | Expiration date of the document |
| IdentificationClass | `string` | Optional | Class of identification |
| CardAccessNumber | `string` | Optional | Card access number |
| IssueDate | `string` | Optional | Issue date of the document |
| IssuingAuthority | `string` | Optional | Issuing authority |
| CollectedEmailAddress | `string` | Optional | Email address collected during KYC |

**Use Cases:**

- Collecting complete KYC information during onboarding
- Submitting KYC data to verification providers
- Storing verified personal information
- Compliance and regulatory record-keeping

**Important Notes:**

- This information is highly sensitive and must be protected according to data protection regulations
- The `SocialSecurityNumber` field may contain SSN (US), SIN (Canada), or equivalent national identification numbers
- Address information should be complete and accurate for verification purposes

### Enums

#### KYCStatus {#kycstatus}

The `KYCStatus` enum defines the possible states of KYC verification for a user.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| KYC_STATUS_UNSPECIFIED | 0 | Default value, should not be used - indicates status has not been set |
| KYC_STATUS_PENDING | 1 | KYC inquiry created but not completed by the user |
| KYC_STATUS_IN_REVIEW | 2 | KYC inquiry submitted and under manual or automated review |
| KYC_STATUS_APPROVED | 3 | KYC inquiry completed and approved - user can proceed |
| KYC_STATUS_REJECTED | 4 | KYC inquiry completed and explicitly rejected |
| KYC_STATUS_FAILED | 5 | KYC inquiry failed due to an error (e.g., document mismatch, bad image quality, verification failure) |
| KYC_STATUS_EXPIRED | 6 | KYC inquiry expired (e.g., not completed within the required time frame) |

**Use Cases:**

- Tracking KYC verification status throughout the onboarding process
- Determining user access based on KYC status
- Managing KYC workflow and notifications
- Compliance and audit reporting
- Filtering users by verification status

**Important Notes:**

- `KYC_STATUS_UNSPECIFIED` (0) is the default value and should not be actively used in production
- `KYC_STATUS_PENDING` indicates the user has started but not completed the KYC process
- `KYC_STATUS_IN_REVIEW` indicates the KYC is being processed (automated or manual review)
- `KYC_STATUS_APPROVED` allows the user to proceed with account activities
- `KYC_STATUS_REJECTED` indicates the KYC was explicitly denied (different from failed)
- `KYC_STATUS_FAILED` indicates a technical or verification error occurred
- `KYC_STATUS_EXPIRED` indicates the KYC process timed out
- Status changes should be tracked in audit trails for compliance purposes
- Only users with `KYC_STATUS_APPROVED` should typically have full account access

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `user.proto`, `user-fundings.proto`, `user-filters.proto`, and `user-kyc.proto`. The proto files use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:

- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in the proto files for the authoritative source of truth:
  - `user.proto` - Core user model and definitions
  - `user-fundings.proto` - Wallet and broker account definitions
  - `user-filters.proto` - Filtering and query messages
  - `user-kyc.proto` - KYC details
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/metadata/metadata.proto`
  - `sologenic/com-fs-utils-lib/models/audit/audit.proto`
  - `sologenic/com-fs-utils-lib/models/role/role.proto`
  - `sologenic/com-fs-utils-lib/models/language/language.proto`
  - `sologenic/com-fs-trade-profile-model/tradeprofile.proto`
  - `sologenic/com-fs-document-model/document.proto`
  - `sologenic/com-fs-utils-lib/models/commission/commission.proto`
  - `sologenic/com-fs-compliance-model/compliance.proto` - Note: The compliance model includes `ComplianceFormAnswer` with `QuestionAnswer` messages that support `repeated File` fields for file attachments. `ComplianceFormAnswer` also includes `FormStatus` (SUBMITTED, RE_VALIDATE, REJECTED) and `SubmittedAt` timestamp fields for tracking form submission status.
  - `sologenic/com-fs-utils-lib/models/order-properties/order-properties.proto`