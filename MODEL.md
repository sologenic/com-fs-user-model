# User Model Documentation

## Table of Contents

- [Overview](#overview)
- [user.proto](#userproto)
  - [Messages](#messages)
    - [UserDetails](#userdetails)
    - [User](#user)
    - [Social](#social)
    - [UserList](#userlist)
    - [StatusMessage](#statusmessage)
    - [UISettings](#uisettings)
    - [DataFeedAccounts](#datafeedaccounts)
    - [DxFeed](#dxfeed)
  - [Enums](#enums)
    - [UserStatus](#userstatus)
    - [SocialType](#socialtype)
    - [Theme](#theme)
- [user-fundings.proto](#user-fundingsproto)
  - [Messages](#messages-1)
    - [Wallet](#wallet)
    - [BankAccount](#bankaccount)
    - [BrokerAccount](#brokeraccount)
  - [Enums](#enums-1)
    - [SignerType](#signertype)
    - [WalletType](#wallettype)
- [user-filters.proto](#user-filtersproto)
  - [Messages](#messages-2)
    - [Filter](#filter)
    - [UserID](#userid)
- [user-compliance.proto](#user-complianceproto)
  - [Messages](#messages-3)
    - [ComplianceQuestions](#compliancequestions)
    - [USA](#usa)
    - [AlpacaDisclosures](#alpacadisclosures)
  - [Enums](#enums-2)
    - [LiquidationImportance](#liquidationimportance)
    - [RiskTolerance](#risktolerance)
    - [InvestmentObjective](#investmentobjective)
    - [FundingSource](#fundingsource)
- [user-kyc.proto](#user-kycproto)
  - [Messages](#messages-4)
    - [IDNumber](#idnumber)
    - [UserKYCDetails](#userkycdetails)
    - [Employment](#employment)
    - [Income](#income)
    - [EmployerContact](#employercontact)
  - [Enums](#enums-3)
    - [EmploymentType](#employmenttype)
    - [IncomeFrequency](#incomefrequency)
    - [KYCStatus](#kycstatus)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The User Model provides a comprehensive data structure for managing users within the system. This model supports user identification, authentication, compliance, KYC (Know Your Customer) verification, funding sources, and organizational context. It is designed to handle complex user management scenarios including multi-organization support, compliance questionnaires, and integration with external systems.

Key features of the user model include:

- **User Identification**: Provides unique identifiers including Firebase Auth UID, external user IDs, and organization-specific identifiers
- **KYC Management**: Comprehensive KYC details including personal information, employment data, and verification status tracking
- **Compliance Support**: Multiple compliance questionnaires (USA, Alpaca Disclosures) with risk tolerance and investment objective tracking, plus file attachment support for compliance form answers
- **Funding Sources**: Support for wallets, bank accounts, and broker accounts with multiple account types
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

The `user.proto` file defines the core user model for user management. It provides message types for representing user data, status management, social profiles, UI settings, and data feed accounts. The file integrates with external utility libraries including metadata, audit, role, language, trade profile, document, commission, and compliance models.

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
| Socials | `repeated Social` | Optional | List of social media profiles and links |
| Language | `language.Lang` | Required | User's preferred language setting |
| ExternalUserID | `string` | Required | UUID for the external user identifier, used in communication with KYC providers or other places where an anonymous ID is required |
| OrganizationID | `string` | Required | UUID of the current organization the user is cloned into |
| Employment | `Employment` | Optional | User's employment information |
| Role | `role.Role` | Required | User's role. A retail user will always have a role of "NORMAL_USER" |
| TradeProfile | `tradeprofile.TradeProfileDetails` | Optional | Trade profile details for the user |
| KYCInquiries | `repeated string` | Optional | Array of KYC integration IDs associated with the user |
| KYCDetails | `UserKYCDetails` | Required | Complete KYC details including personal information and identification |
| UserDocumentCompliance | `document.UserDocumentCompliance` | Required | Document compliance information for the user |
| KYCStatus | `KYCStatus` | Required | Status of KYC verification (e.g., PENDING, APPROVED, REJECTED) |
| UserTradeProfile | `tradeprofile.UserTradeProfile` | Optional | User trade profile information |
| ComplianceQuestions | `repeated ComplianceQuestions` | Optional | Compliance questionnaire responses |
| BrokerAccounts | `repeated BrokerAccount` | Optional | List of broker accounts associated with the user |
| BankAccounts | `repeated BankAccount` | Optional | List of bank accounts associated with the user |
| UISettings | `UISettings` | Required | User interface settings including theme preferences |
| CommissionSettings | `commission.CommissionSettings` | Optional | Broker API specific commission fields for user level (overrides organization level) |
| DataFeedAccounts | `DataFeedAccounts` | Optional | Data feed account configurations |
| AllowedJurisdictions | `repeated string` | Optional | ISO 3166-1 alpha-3 country codes (e.g., "USA", "CAD") indicating allowed jurisdictions |
| EmailAddress | `string` | Required | Email address for the user, often retrieved from the authentication provider |
| ComplianceFormAnswers | `repeated compliance.ComplianceFormAnswer` | Optional | Compliance form answers for the user. Each answer can include multiple file attachments (see compliance model documentation) |

**Use Cases:**

- Creating new user records with complete information
- Updating user information and preferences
- Retrieving user profile data for display
- Managing user status for administrative purposes
- Associating users with specific organizations
- Assigning roles for permission management
- Tracking KYC and compliance status
- Managing user funding sources (wallets, bank accounts, broker accounts)
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

#### Social {#social}

The `Social` message represents a social media profile or external link associated with a user.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| URL | `string` | Required | URL of the social media profile or website |
| Type | `SocialType` | Required | Type of social media platform (see SocialType enum) |

**Use Cases:**

- Storing user social media profiles
- Linking to user websites or external profiles
- Displaying social links in user profiles

**Important Notes:**

- The `URL` should be a valid, accessible URL
- The `Type` field determines which platform or category the link belongs to

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
| ADMIN_DEACTIVATED | 2 | User account has been deactivated by an administrator |
| TO_BE_APPROVED | 3 | User account is pending administrative approval |

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

#### SocialType {#socialtype}

The `SocialType` enum defines the types of social media platforms or external links that can be associated with a user.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_SOCIALTYPE | 0 | Default/unused value (protobuf convention) - should not be used |
| WEBSITE | 1 | Personal or professional website |
| GITHUB | 2 | GitHub profile |
| REDDIT | 3 | Reddit profile |
| DISCORD | 4 | Discord profile |
| TWITTER | 5 | Twitter/X profile |
| FACEBOOK | 6 | Facebook profile |
| TELEGRAM | 7 | Telegram profile |
| INSTAGRAM | 8 | Instagram profile |
| LINKEDIN | 9 | LinkedIn profile |

**Use Cases:**

- Categorizing social media links in user profiles
- Filtering or displaying specific social platform links
- Validating social media URLs based on platform type
- Enforcing business logic based on social platform

**Important Notes:**

- Values with number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid social type values should be used in production code
- The URL field in the Social message should match the platform type

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

The `user-fundings.proto` file defines funding source models for users, including wallets, bank accounts, and broker accounts. It provides message types for representing different funding methods and account types. The file integrates with external utility libraries including order-properties for broker information.

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

#### BankAccount {#bankaccount}

The `BankAccount` message represents a traditional bank account associated with a user.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| AccountName | `string` | Required | Name of the bank account |
| BankName | `string` | Required | Name of the bank where the account is held |
| BankAddress | `string` | Required | Physical address of the bank |
| AccountNumber | `string` | Required | Bank account number |
| ABA | `string` | Required | Bank routing number (ABA routing number for US banks) |
| SWIFT | `string` | Required | SWIFT code for international transfers |
| IBAN | `string` | Required | International Bank Account Number |

**Use Cases:**

- Storing bank account information for funding and withdrawals
- Processing wire transfers and ACH transactions
- Managing multiple bank accounts per user
- Supporting international banking with SWIFT and IBAN

**Important Notes:**

- The `ABA` field is used for US bank routing numbers
- The `SWIFT` code is required for international wire transfers
- The `IBAN` is used for international bank account identification
- All fields are required to support both domestic and international banking operations

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
- Associating bank accounts with broker accounts for funding
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

## user-compliance.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-compliance.proto` file defines compliance questionnaire models for user management. It provides message types for representing compliance data including USA-specific questionnaires and Alpaca disclosures. The model is designed to be extensible for additional compliance questionnaires (e.g., MiFID). The file includes enums for risk tolerance, investment objectives, liquidation importance, and funding sources.

### Messages

#### ComplianceQuestions {#compliancequestions}

The `ComplianceQuestions` message is a container for multiple compliance questionnaires. It is designed to support various compliance frameworks and can be extended with additional questionnaire types.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| USA | `USA` | Optional | USA-specific compliance questionnaire |
| AlpacaDisclosures | `AlpacaDisclosures` | Optional | Alpaca broker-specific disclosures |

**Use Cases:**

- Storing multiple compliance questionnaire responses for a user
- Supporting different compliance frameworks (USA, Alpaca, MiFID, etc.)
- Managing compliance data across different jurisdictions
- Extending compliance support for new regulations

**Important Notes:**

- This model is open to having multiple questionnaires with regards to compliance like MiFID, etc.
- Each questionnaire type is optional, allowing users to complete only relevant forms
- Additional questionnaire types can be added as new optional fields

#### USA {#usa}

The `USA` message represents USA-specific compliance questionnaire data including investment experience, income, net worth, and investment preferences.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| RecordedAt | `google.protobuf.Timestamp` | Required | Timestamp when the questionnaire was completed |
| YearsExperience | `int64` | Required | Number of years of investment experience |
| AnnualIncome | `int64` | Required | Annual income amount |
| NetWorth | `int64` | Required | Total net worth amount |
| ConversionImportance | `LiquidationImportance` | Required | Importance of quick conversion/liquidation (see LiquidationImportance enum) |
| Tolerance | `RiskTolerance` | Required | User's risk tolerance level (see RiskTolerance enum) |
| Objective | `InvestmentObjective` | Required | User's investment objective (see InvestmentObjective enum) |

**Use Cases:**

- Collecting USA regulatory compliance information
- Assessing user suitability for different investment products
- Determining risk-appropriate investment recommendations
- Compliance reporting and record-keeping

**Important Notes:**

- All financial amounts (AnnualIncome, NetWorth) are stored as integers (likely in cents or smallest currency unit)
- The `RecordedAt` timestamp is important for compliance record-keeping
- These fields are used to determine appropriate investment products and risk levels

#### AlpacaDisclosures {#alpacadisclosures}

The `AlpacaDisclosures` message represents Alpaca broker-specific disclosure information including control person status, exchange affiliations, and political exposure.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| RecordedAt | `google.protobuf.Timestamp` | Required | Timestamp when the disclosures were recorded |
| IsControlPerson | `bool` | Required | Whether the user is a control person (has significant influence over a company) |
| IsAffiliatedExchangeOrFinra | `bool` | Required | Whether the user is affiliated with an exchange or FINRA |
| IsPoliticallyExposed | `bool` | Required | Whether the user is a politically exposed person (PEP) |
| ImmediateFamilyExposed | `bool` | Required | Whether the user's immediate family members are politically exposed |
| FundingSources | `repeated FundingSource` | Optional | List of funding sources for the account (see FundingSource enum) |

**Use Cases:**

- Collecting Alpaca broker-specific regulatory disclosures
- Identifying control persons and exchange affiliations
- Screening for politically exposed persons (PEP) for AML compliance
- Tracking funding sources for regulatory reporting

**Important Notes:**

- These disclosures are required by Alpaca and other brokers for regulatory compliance
- PEP screening is important for anti-money laundering (AML) compliance
- Control person status may affect trading restrictions
- The `RecordedAt` timestamp is important for compliance record-keeping

### Enums

#### LiquidationImportance {#liquidationimportance}

The `LiquidationImportance` enum defines how important quick conversion or liquidation is to the user.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| VERY_IMPORTANT | 0 | Quick conversion/liquidation is very important |
| SOMEWHAT_IMPORTANT | 1 | Quick conversion/liquidation is somewhat important |
| NOT_IMPORTANT | 2 | Quick conversion/liquidation is not important |
| NO_PREFERENCE | 3 | No preference regarding liquidation speed |

**Use Cases:**

- Assessing user liquidity needs
- Determining appropriate investment product recommendations
- Compliance questionnaire responses
- Risk assessment and suitability determination

**Important Notes:**

- This field is used in USA compliance questionnaires
- The value helps determine appropriate investment products based on liquidity needs
- Value 0 (VERY_IMPORTANT) is a valid value, not a default/unused value

#### RiskTolerance {#risktolerance}

The `RiskTolerance` enum defines the user's risk tolerance level for investments.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| CONSERVATIVE | 0 | Conservative risk tolerance - prefers low-risk investments |
| MODERATELY_CONSERVATIVE | 1 | Moderately conservative risk tolerance |
| MODERATE | 2 | Moderate risk tolerance - balanced approach |
| MODERATELY_AGGRESSIVE | 3 | Moderately aggressive risk tolerance |
| SIGNIFICANT_RISK | 4 | Significant risk tolerance - comfortable with high-risk investments |

**Use Cases:**

- Assessing user risk profile for investment recommendations
- Compliance questionnaire responses
- Determining appropriate investment products
- Risk-based portfolio allocation

**Important Notes:**

- This field is used in USA compliance questionnaires
- Value 0 (CONSERVATIVE) is a valid value, not a default/unused value
- Risk tolerance is a key factor in suitability determination for investment products

#### InvestmentObjective {#investmentobjective}

The `InvestmentObjective` enum defines the user's primary investment objective or goal.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| INCOME | 0 | Primary objective is generating income |
| BALANCED | 1 | Balanced approach between income and growth |
| GROWTH_AND_INCOME | 2 | Focus on both growth and income |
| SAFE_LONG_TERM_GROWTH | 3 | Safe long-term growth with lower risk |
| GREATER_RISK_LONG_TERM_GROWTH | 4 | Long-term growth with higher risk tolerance |
| SPECULATION | 5 | Speculative investments with high risk |

**Use Cases:**

- Assessing user investment goals
- Compliance questionnaire responses
- Determining appropriate investment strategies
- Portfolio allocation and product recommendations

**Important Notes:**

- This field is used in USA compliance questionnaires
- Value 0 (INCOME) is a valid value, not a default/unused value
- Investment objective helps determine suitable investment products and strategies

#### FundingSource {#fundingsource}

The `FundingSource` enum defines the sources of funds for user accounts, used in compliance disclosures.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_FUNDING_SOURCE | 0 | Default/unused value (protobuf convention) - should not be used |
| EMPLOYMENT_INCOME | 1 | Funds from employment income |
| INVESTMENTS | 2 | Funds from other investments |
| INHERITANCE | 3 | Funds from inheritance |
| BUSINESS_INCOME | 4 | Funds from business income |
| SAVINGS | 5 | Funds from savings |
| FAMILY | 6 | Funds from family members |

**Use Cases:**

- Compliance disclosures (e.g., Alpaca disclosures)
- Source of funds documentation for AML compliance
- Regulatory reporting requirements
- Risk assessment and due diligence

**Important Notes:**

- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid funding source values should be used in production code
- Multiple funding sources can be specified (repeated field in AlpacaDisclosures)
- Source of funds information is important for AML and regulatory compliance

## user-kyc.proto

### Package Information

- **Package Name**: `user`
- **Go Package Path**: `github.com/sologenic/com-fs-user-model;user`

### Overview

The `user-kyc.proto` file defines KYC (Know Your Customer) models for user management. It provides message types for representing KYC details including personal identification, employment information, income data, and verification status. The file includes enums for employment type, income frequency, and KYC status tracking.

### Messages

#### IDNumber {#idnumber}

The `IDNumber` message represents an identification number from a government-issued document.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| IssuingCountry | `string` | Required | Country code where the ID was issued |
| IdentificationClass | `string` | Required | Type or class of identification (e.g., "Passport", "Driver's License", "National ID") |
| IdentificationNumber | `string` | Required | The identification number from the document |

**Use Cases:**

- Storing government-issued identification information
- KYC verification processes
- Compliance and regulatory requirements
- Identity verification

**Important Notes:**

- The `IdentificationClass` should indicate the type of document (passport, driver's license, etc.)
- The `IdentificationNumber` should match the number on the physical document
- This information is sensitive and should be handled according to data protection regulations

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

**Use Cases:**

- Collecting complete KYC information during onboarding
- Submitting KYC data to verification providers
- Storing verified personal information
- Compliance and regulatory record-keeping

**Important Notes:**

- All fields are required for complete KYC verification
- This information is highly sensitive and must be protected according to data protection regulations
- The `SocialSecurityNumber` field may contain SSN (US), SIN (Canada), or equivalent national identification numbers
- Address information should be complete and accurate for verification purposes

#### Employment {#employment}

The `Employment` message contains detailed employment information for KYC and compliance purposes.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| EmployerName | `string` | Required | Name of the employer |
| JobTitle | `string` | Required | User's job title or position |
| StartDate | `google.protobuf.Timestamp` | Required | Employment start date |
| EndDate | `google.protobuf.Timestamp` | Required | Employment end date (empty if still employed) |
| Type | `EmploymentType` | Required | Type of employment (see EmploymentType enum) |
| Industry | `string` | Optional | Industry sector |
| Income | `Income` | Required | Income information (see Income message) |
| Contact | `EmployerContact` | Required | Employer contact information (see EmployerContact message) |
| IsVerified | `bool` | Required | Whether the employment has been verified |
| VerifiedAt | `string` | Required | Timestamp or date when verification was completed |

**Use Cases:**

- Collecting employment information for KYC
- Verifying user employment status
- Assessing income and employment stability
- Compliance and regulatory requirements
- Source of funds verification

**Important Notes:**

- The `EndDate` field should be empty (not set) if the user is currently employed
- The `IsVerified` field indicates whether third-party verification has been completed
- Employment verification may be required for certain account types or jurisdictions
- The `Income` field provides detailed income information

#### Income {#income}

The `Income` message represents income amount, currency, and frequency information.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Amount | `float` | Required | Income amount |
| Currency | `string` | Required | Currency code (e.g., "USD", "CAD") |
| Frequency | `IncomeFrequency` | Required | How often the income is received (see IncomeFrequency enum) |

**Use Cases:**

- Storing income information for employment records
- Calculating annual income for compliance questionnaires
- Assessing user financial capacity
- KYC and compliance reporting

**Important Notes:**

- The `Amount` field is a float, so it can represent decimal values
- The `Currency` field should use standard currency codes (ISO 4217)
- The `Frequency` field determines how to calculate annual income (e.g., monthly * 12, weekly * 52)
- This information is used in compliance questionnaires and risk assessment

#### EmployerContact {#employercontact}

The `EmployerContact` message contains contact information for the employer, used for verification purposes.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Name | `string` | Required | Contact person's name or department name |
| Email | `string` | Required | Contact email address |
| Phone | `string` | Required | Contact phone number |
| Address | `string` | Required | Employer's physical address |

**Use Cases:**

- Storing employer contact information for verification
- Contacting employers to verify employment
- Compliance and verification processes
- Record-keeping for audit purposes

**Important Notes:**

- All fields are required for complete employer contact information
- This information may be used by third-party verification services
- The contact information should be for HR or verification departments when possible

### Enums

#### EmploymentType {#employmenttype}

The `EmploymentType` enum defines the types of employment relationships.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_EMPLOYMENTTYPE | 0 | Default/unused value (protobuf convention) - should not be used |
| FULL_TIME | 1 | Full-time employment |
| PART_TIME | 2 | Part-time employment |
| CONTRACT | 3 | Contract-based employment |
| FREELANCE | 4 | Freelance or independent contractor |
| SELF_EMPLOYED | 5 | Self-employed |
| INTERNSHIP | 6 | Internship position |

**Use Cases:**

- Classifying employment relationships
- KYC and compliance reporting
- Assessing employment stability
- Determining income verification requirements

**Important Notes:**

- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid employment type values should be used in production code
- Different employment types may have different verification requirements
- Self-employed and freelance may require additional documentation

#### IncomeFrequency {#incomefrequency}

The `IncomeFrequency` enum defines how frequently income is received.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_USED_INCOMEFREQUENCY | 0 | Default/unused value (protobuf convention) - should not be used |
| HOURLY | 1 | Income received hourly |
| WEEKLY | 2 | Income received weekly |
| BI_WEEKLY | 3 | Income received bi-weekly (every two weeks) |
| MONTHLY | 4 | Income received monthly |
| ANNUALLY | 5 | Income received annually |

**Use Cases:**

- Storing income frequency in employment records
- Calculating annual income for compliance
- Displaying income information to users
- Financial capacity assessment

**Important Notes:**

- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid income frequency values should be used in production code
- The frequency is used with the amount to calculate annual income for compliance questionnaires
- Common frequencies are monthly and annually for salaried employees

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

This documentation corresponds to the Protocol Buffer definitions in `user.proto`, `user-fundings.proto`, `user-filters.proto`, `user-compliance.proto`, and `user-kyc.proto`. The proto files use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:

- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in the proto files for the authoritative source of truth:
  - `user.proto` - Core user model and definitions
  - `user-fundings.proto` - Wallet, bank account, and broker account definitions
  - `user-filters.proto` - Filtering and query messages
  - `user-compliance.proto` - Compliance questionnaires and disclosures
  - `user-kyc.proto` - KYC details and employment information
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
