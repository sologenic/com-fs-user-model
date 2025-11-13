# User Model Documentation

This document provides comprehensive documentation for all Protocol Buffer (`.proto`) files in the `com-fs-user-model` repository. The user model is designed to support multi-organizational user management with comprehensive KYC, compliance, and trading profile capabilities.

## Table of Contents

1. [Overview](#overview)
2. [user.proto](#userproto) - Core user model and definitions
3. [user-fundings.proto](#user-fundingsproto) - Wallet, bank account, and broker account definitions
4. [user-filters.proto](#user-filtersproto) - Filtering and query messages
5. [user-compliance.proto](#user-complianceproto) - Compliance questionnaires and disclosures
6. [user-kyc.proto](#user-kycproto) - KYC (Know Your Customer) details and employment information

---

## Overview

The user model is a comprehensive system for managing users across multiple organizations. Key features include:

- **Multi-Organization Support**: Users can exist in multiple organizations with organization-specific data
- **KYC Integration**: Full KYC (Know Your Customer) verification support with multiple providers
- **Compliance Management**: Regulatory compliance questionnaires (USA, Alpaca, MiFID-ready)
- **Trading Profiles**: Integration with trading profile models for broker account management
- **Wallet Management**: Support for multiple wallet types including tax-advantaged accounts (TFSA, RRSP)
- **Audit Trail**: Complete audit logging for all user changes
- **Role-Based Access**: Integration with role management system

All proto files use Protocol Buffers version 3 (`proto3`) and are in the `user` package.

---

## user.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

The core user model file defines the main user entity structure, including user details, status management, social links, UI settings, and integration with external models for trading profiles, documents, and compliance.

### Messages

#### UserDetails

The primary message containing all user information. This is the core data structure for user entities.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `string` | Yes | Email address used for Firebase authentication. This is the primary unique identifier for the user across all organizations. |
| `FirstName` | `string` | No | User's legal first name. Used for KYC verification and official documents. |
| `LastName` | `string` | No | User's legal last name. Used for KYC verification and official documents. |
| `Address` | `string` | No | User's physical address. Can be a full address string or formatted address. |
| `Avatar` | `string` | No | URL or identifier for the user's profile picture/avatar. Typically stored in a CDN or file storage service. |
| `Alias` | `string` | No | User's nickname or display name. Used for UI display purposes and may differ from legal name. |
| `Description` | `string` | No | User's bio or description. User-provided text about themselves. |
| `Status` | `UserStatus` | No | Current account status. Determines if the user can access the system and perform operations. See `UserStatus` enum below. |
| `Wallets` | `repeated Wallet` | No | List of cryptocurrency wallets associated with the user. Each wallet can be linked to multiple organizations. See `user-fundings.proto` for Wallet definition. |
| `Socials` | `repeated Social` | No | List of social media links and profiles. Used for user profile display and verification. |
| `Language` | `language.Lang` | No | User's preferred language. Used for UI localization and communication preferences. |
| `ExternalUserID` | `string` | No | UUID for external user identifier. Used when communicating with external services (e.g., KYC providers) where an anonymous or external ID is required. This allows mapping between internal user IDs and external system IDs. |
| `OrganizationID` | `string` | No | UUID of the current organization the user is cloned into. This is a legacy field - the authoritative list of organizations is in `User.OrganizationIDs`. This field represents the organization context for this particular user instance. |
| `Employment` | `optional Employment` | No | Employment information including employer, job title, income, and verification status. See `user-kyc.proto` for Employment definition. |
| `Role` | `role.Role` | No | User's role in the system. A retail user will always have a role of "NORMAL_USER". Admin and other roles are managed through the role system. |
| `TradeProfile` | `optional tradeprofile.TradeProfileDetails` | No | Trade profile details from the trade profile model. Contains trading preferences, risk settings, and trading history. |
| `KYCInquiries` | `repeated string` | No | Array of KYC integration IDs. Each string represents a unique identifier for a KYC verification inquiry with an external KYC provider. Used to track multiple KYC attempts or different provider integrations. |
| `KYCDetails` | `UserKYCDetails` | No | Complete KYC verification details including personal information, identification numbers, and address. See `user-kyc.proto` for definition. |
| `UserDocumentCompliance` | `document.UserDocumentCompliance` | No | Document compliance information from the document model. Tracks signed documents, compliance status, and document verification. |
| `KYCStatus` | `KYCStatus` | No | Current status of KYC verification. Values include PENDING, APPROVED, REJECTED, IN_REVIEW, FAILED, EXPIRED. See `user-kyc.proto` for KYCStatus enum. |
| `UserTradeProfile` | `optional tradeprofile.UserTradeProfile` | No | User trade profile from the trade profile model. Contains user-specific trading configuration and preferences. |
| `ComplianceQuestions` | `repeated ComplianceQuestions` | No | Array of compliance questionnaire responses. Supports multiple compliance frameworks (USA, Alpaca, MiFID-ready). See `user-compliance.proto` for definition. |
| `BrokerAccounts` | `repeated BrokerAccount` | No | List of broker trading accounts associated with the user. Each account links to a specific broker (e.g., RQD) and organization. See `user-fundings.proto` for definition. |
| `BankAccounts` | `repeated BankAccount` | No | List of traditional bank accounts for funding operations. Contains account numbers, routing numbers, SWIFT codes, and IBANs. See `user-fundings.proto` for definition. |
| `UISettings` | `UISettings` | No | User interface preferences including theme selection. Allows users to customize their UI experience. |
| `CommissionSettings` | `optional commission.CommissionSettings` | No | Broker API specific commission fields at the user level. If set, these override organization-level commission settings for this specific user. Used for custom commission arrangements. |
| `DataFeedAccounts` | `optional DataFeedAccounts` | No | Data feed account configuration. Currently supports DxFeed integration for market data. |
| `AllowedJurisdictions` | `repeated string` | No | ISO 3166-1 alpha-3 country codes (e.g., "USA", "CAD", "GBR") representing jurisdictions where the user is allowed to trade or access services. Used for regulatory compliance and geographic restrictions. |

**Use Cases:**
- Storing complete user profile information
- Multi-organization user data management
- KYC and compliance tracking
- Trading account and wallet management
- User preference and settings storage

**Important Notes:**
- `UserID` must be a valid email address as it's used for Firebase authentication
- `OrganizationID` is legacy - use `User.OrganizationIDs` for the authoritative organization list
- `ExternalUserID` enables integration with external systems that require anonymous identifiers
- `KYCInquiries` can contain multiple IDs for tracking different KYC provider integrations

#### User

Complete user entity wrapper that includes user details, metadata, audit information, and organization memberships.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `User` | `UserDetails` | Yes | Complete user details as described above. |
| `MetaData` | `metadata.MetaData` | No | Metadata associated with the user record. Includes network information, versioning, and other metadata fields. |
| `Audit` | `audit.Audit` | No | Complete audit trail for the user. Tracks who created/updated the user and when. Includes CreatedBy, CreatedAt, UpdatedBy, UpdatedAt fields. |
| `OrganizationIDs` | `repeated string` | No | List of all organization UUIDs where this user exists (is cloned into). This is the authoritative source for user-organization relationships. When a user is cloned to a new organization, that organization's ID is added to this list. |

**Use Cases:**
- Complete user entity representation in API responses
- Multi-organization user management
- Audit and compliance tracking
- User cloning across organizations

**Important Notes:**
- `OrganizationIDs` is the authoritative list of organizations where the user exists
- The `User.OrganizationID` field in `UserDetails` is legacy and represents the current organization context
- `Audit` fields are typically set automatically by the service layer

#### Social

Represents a social media link or profile associated with the user.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `URL` | `string` | Yes | The URL of the social media profile or website. |
| `Type` | `SocialType` | Yes | The type of social media platform. See `SocialType` enum below. |

**Use Cases:**
- User profile display
- Social verification
- Community engagement tracking

#### UserList

Container for a list of users with optional pagination support.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Users` | `repeated User` | No | List of user entities. Can be empty if no users match the query. |
| `Offset` | `optional int32` | No | Pagination offset value. Used for paginated queries to indicate the starting position of the result set. |

**Use Cases:**
- Paginated user queries
- Bulk user retrieval
- Search result sets

#### StatusMessage

Message used for updating or reporting user status changes.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `string` | Yes | Email address of the user whose status is being changed. |
| `OrganizationID` | `string` | Yes | Organization context for the status change. |
| `Status` | `UserStatus` | Yes | The new status value. See `UserStatus` enum below. |
| `Network` | `optional metadata.Network` | No | Network context if applicable. Used for blockchain-related operations. |
| `Audit` | `audit.Audit` | No | Audit information tracking who made the change and when. |

**Use Cases:**
- User status updates (activation, deactivation, approval)
- Status change notifications
- Audit logging of status changes

#### UISettings

User interface preferences and settings.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Theme` | `Theme` | No | User's preferred UI theme. See `Theme` enum below. |

**Use Cases:**
- UI customization
- User preference storage
- Theme management

#### DataFeedAccounts

Container for data feed account configurations. Currently supports DxFeed integration.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `DxFeed` | `optional DxFeed` | No | DxFeed account configuration. See DxFeed message below. |

**Use Cases:**
- Market data feed configuration
- Third-party data provider integration

#### DxFeed

DxFeed account configuration for market data access.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountID` | `string` | Yes | DxFeed account identifier. Used to authenticate and access DxFeed market data services. |

**Use Cases:**
- DxFeed market data integration
- Real-time market data access

### Enums

#### UserStatus

Account status values that determine user access and capabilities.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_USERSTATUS` | 0 | Default/unused value. Should not be used in production. |
| `ACTIVE` | 1 | User account is active and can access the system normally. |
| `ADMIN_DEACTIVATED` | 2 | User account has been deactivated by an administrator. User cannot access the system. |
| `TO_BE_APPROVED` | 3 | User account is pending approval. User may have limited access until approved by an administrator. |

**Use Cases:**
- Access control
- Account management
- User onboarding workflow

#### SocialType

Types of social media platforms and websites.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_SOCIALTYPE` | 0 | Default/unused value. Should not be used. |
| `WEBSITE` | 1 | Personal or professional website URL. |
| `GITHUB` | 2 | GitHub profile URL. |
| `REDDIT` | 3 | Reddit profile URL. |
| `DISCORD` | 4 | Discord profile URL or username. |
| `TWITTER` | 5 | Twitter/X profile URL. |
| `FACEBOOK` | 6 | Facebook profile URL. |
| `TELEGRAM` | 7 | Telegram profile URL or username. |
| `INSTAGRAM` | 8 | Instagram profile URL. |
| `LINKEDIN` | 9 | LinkedIn profile URL. |

**Use Cases:**
- Social media profile linking
- User verification
- Community engagement

#### Theme

User interface theme preferences.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_THEME` | 0 | Default/unused value. Should not be used. |
| `DARK` | 1 | Dark theme preference. |
| `LIGHT` | 2 | Light theme preference. |

**Use Cases:**
- UI customization
- User preference management

---

## user-fundings.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

This file defines funding-related entities including cryptocurrency wallets, traditional bank accounts, and broker trading accounts. It supports multi-organization wallet linking and various wallet types including tax-advantaged accounts.

### Messages

#### Wallet

Represents a cryptocurrency wallet address associated with a user. Wallets can be linked to multiple organizations.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Address` | `string` | Yes | The blockchain wallet address. This is the unique identifier for the wallet on the blockchain. |
| `Alias` | `string` | No | User-friendly name or label for the wallet. Helps users identify their wallets. |
| `Type` | `WalletType` | No | Type of wallet account. Can be tax-advantaged (TFSA, RRSP) or standard. See `WalletType` enum below. |
| `SignerType` | `SignerType` | No | Method used to sign transactions for this wallet. Determines which wallet application or extension is used. See `SignerType` enum below. |
| `Organizations` | `repeated string` | No | List of organization UUIDs linked to this wallet address. A single wallet can be associated with multiple organizations, enabling cross-organization wallet usage. |

**Use Cases:**
- Cryptocurrency wallet management
- Multi-organization wallet sharing
- Tax-advantaged account support (TFSA, RRSP)
- Transaction signing configuration

**Important Notes:**
- A wallet address can be linked to multiple organizations
- `SignerType` determines which wallet application will be used for signing transactions
- Tax-advantaged wallet types (TFSA, RRSP) are specific to Canadian tax regulations

#### BankAccount

Represents a traditional bank account for funding operations (deposits and withdrawals).

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountName` | `string` | Yes | Name on the bank account. Typically the account holder's name. |
| `BankName` | `string` | No | User's identifier in the bank account or the name of the bank. |
| `BankAddress` | `string` | No | Physical address of the bank branch. |
| `AccountNumber` | `string` | No | Bank account number. Used for ACH transfers and other banking operations. |
| `ABA` | `string` | No | ABA routing number (US) or bank routing number. Used for US bank transfers. |
| `SWIFT` | `string` | No | SWIFT/BIC code for international wire transfers. |
| `IBAN` | `string` | No | International Bank Account Number. Used primarily in Europe and other regions for international transfers. |

**Use Cases:**
- Bank account registration for funding
- ACH transfers (US)
- International wire transfers
- Withdrawal processing

**Important Notes:**
- Different fields are required depending on the country and transfer type
- ABA is used for US domestic transfers
- SWIFT and IBAN are used for international transfers
- Account verification is typically required before use

#### BrokerAccount

Represents a trading account with a broker clearing firm. Links a user to a specific broker and organization for trading operations.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountID` | `string` | Yes | User's unique identifier in the broker's system. This is the account identifier provided by the broker (e.g., Alpaca account ID, RQD account ID). |
| `Broker` | `orderproperties.ClearingBroker` | Yes | The clearing broker identifier. Values come from the order model (e.g., "RQD", "ALPACA"). Determines which broker API to use for trading operations. |
| `OrganizationID` | `string` | Yes | Organization identifier for the broker account. Links the account to a specific organization context. |
| `Profiles` | `repeated string` | No | Array of bank account profile identifiers. Links this broker account to one or more bank accounts for funding operations. Each profile ID corresponds to a bank account that can be used for deposits/withdrawals to/from this broker account. |

**Use Cases:**
- Broker account registration
- Trading account management
- Funding source linking
- Multi-broker support

**Important Notes:**
- A user can have multiple broker accounts with different brokers
- Each broker account is organization-specific
- Bank account profiles must be verified before they can be linked to a broker account
- The `Broker` field uses values from the order model's `ClearingBroker` enum

### Enums

#### SignerType

Methods for signing blockchain transactions. Determines which wallet application or extension will be used.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USER_SIGNETTYPE` | 0 | Default/unused value. Should not be used. |
| `MOBILE_APP` | 1 | Mobile application wallet. User signs transactions using a mobile wallet app (e.g., Cosmostation mobile, Keplr mobile). |
| `BROWSER_LEAP` | 2 | Leap browser extension. Leap is a Cosmos ecosystem wallet browser extension. |
| `BROWSER_COSMOSTATION` | 3 | Cosmostation browser extension. Cosmostation is a popular Cosmos ecosystem wallet. |
| `BROWSER_KEPLR` | 4 | Keplr browser extension. Keplr is a widely-used Cosmos ecosystem wallet browser extension. |

**Use Cases:**
- Transaction signing configuration
- Wallet integration
- User preference for wallet application

#### WalletType

Types of wallet accounts, including tax-advantaged options.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_WALLETTYPE` | 0 | Default/unused value. Should not be used. |
| `TFSA` | 1 | Tax-Free Savings Account. Canadian tax-advantaged account where investment gains are not taxed. |
| `RRSP` | 2 | Registered Retirement Savings Plan. Canadian tax-advantaged retirement account with tax-deferred growth. |
| `STANDARD` | 3 | Standard wallet account with no special tax treatment. Regular taxable account. |

**Use Cases:**
- Tax-advantaged account support (Canadian)
- Account type classification
- Tax reporting

**Important Notes:**
- TFSA and RRSP are specific to Canadian tax regulations
- Different tax rules apply to each account type
- Account type may affect trading restrictions or reporting requirements

---

## user-filters.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

This file defines filtering and query messages used for searching and retrieving users. Supports filtering by various criteria including user IDs, organization, status, external IDs, wallet addresses, and broker accounts.

### Messages

#### Filter

Comprehensive filter message for querying users with multiple filter criteria and pagination support.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserIDs` | `repeated string` | No | List of user email addresses to filter by. If provided, only users matching these IDs will be returned. |
| `Network` | `optional metadata.Network` | No | Network context filter. Used for blockchain-related filtering. |
| `OrganizationID` | `string` | Yes | Organization identifier. Filters users to only those belonging to this organization. |
| `Offset` | `optional int32` | No | Pagination offset. Starting position for paginated results. |
| `Limit` | `optional int32` | No | Maximum number of results to return. Used for pagination. |
| `InquiryID` | `optional string` | No | KYC inquiry ID filter. Filters users by a specific KYC verification inquiry. |
| `Status` | `optional UserStatus` | No | User status filter. Only returns users with the specified status (e.g., ACTIVE, ADMIN_DEACTIVATED, TO_BE_APPROVED). |
| `ExternalUserIDs` | `repeated string` | No | List of external user IDs to filter by. Used when querying by external system identifiers (e.g., KYC provider IDs). |
| `WalletAddress` | `optional string` | No | Wallet address filter. Returns users associated with the specified wallet address. |
| `BrokerAccountID` | `optional string` | No | Broker account ID filter. Returns users associated with the specified broker account. |

**Use Cases:**
- User search and retrieval
- Filtering by organization
- Status-based queries
- KYC inquiry tracking
- Wallet and broker account lookups
- Paginated user lists

**Important Notes:**
- `OrganizationID` is required for all queries
- Multiple filter criteria can be combined (AND logic)
- `Offset` and `Limit` enable pagination
- `WalletAddress` and `BrokerAccountID` enable reverse lookups

#### UserID

Simple message for identifying a specific user within an organization context.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `string` | Yes | Email address of the user. |
| `OrganizationID` | `string` | Yes | Organization context for the user lookup. |
| `Network` | `optional metadata.Network` | No | Network context if applicable. Used for blockchain-related operations. |

**Use Cases:**
- Single user retrieval
- User identification in API calls
- Organization-scoped user lookups

**Important Notes:**
- Both `UserID` and `OrganizationID` are required
- `Network` is optional and used for blockchain-specific operations

---

## user-compliance.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

This file defines compliance questionnaire structures for regulatory compliance. Currently supports USA securities regulations and Alpaca-specific disclosures. The model is designed to be extensible for additional compliance frameworks like MiFID.

### Messages

#### ComplianceQuestions

Container for multiple compliance questionnaire types. Designed to support various regulatory frameworks.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `USA` | `optional USA` | No | USA regulatory compliance questionnaire. See USA message below. |
| `AlpacaDisclosures` | `optional AlpacaDisclosures` | No | Alpaca-specific compliance disclosures. See AlpacaDisclosures message below. |

**Use Cases:**
- Multi-framework compliance support
- Regulatory questionnaire storage
- Compliance tracking

**Important Notes:**
- The model is designed to support additional compliance frameworks (e.g., MiFID)
- Multiple questionnaire types can be stored for a single user
- Questionnaires may need to be updated periodically

#### USA

USA regulatory compliance questionnaire. Collects investor profile information required for suitability assessment under US securities regulations.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RecordedAt` | `google.protobuf.Timestamp` | Yes | Timestamp when the questionnaire was completed. Used for compliance tracking and to determine if re-submission is required (questionnaires may expire after a certain period). |
| `YearsExperience` | `int64` | Yes | Number of years of trading/investment experience. Used for suitability assessment. Typically ranges from 0 to 50+ years. |
| `AnnualIncome` | `int64` | Yes | Annual income in the base currency (typically USD). Used for suitability assessment and to determine appropriate investment products. Stored as integer (cents or smallest currency unit). |
| `NetWorth` | `int64` | Yes | Total net worth in the base currency (typically USD). Includes all assets minus liabilities. Used for suitability assessment. Stored as integer (cents or smallest currency unit). |
| `ConversionImportance` | `LiquidationImportance` | Yes | Importance of liquidity/ability to convert investments to cash. See `LiquidationImportance` enum below. |
| `Tolerance` | `RiskTolerance` | Yes | Investor's risk tolerance level. See `RiskTolerance` enum below. |
| `Objective` | `InvestmentObjective` | Yes | Primary investment objective. See `InvestmentObjective` enum below. |

**Use Cases:**
- US securities trading compliance
- Investor suitability assessment
- Regulatory reporting
- Risk management

**Compliance Notes:**
- This information is required for US users trading securities
- May need to be updated periodically (e.g., annually)
- Used to ensure appropriate product recommendations

#### AlpacaDisclosures

Alpaca-specific compliance disclosures required for trading through Alpaca Markets.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RecordedAt` | `google.protobuf.Timestamp` | Yes | Timestamp when the disclosures were completed. Used for compliance tracking. |
| `IsControlPerson` | `bool` | Yes | Whether the user is a control person (e.g., director, officer, or beneficial owner of 10% or more of a class of equity securities). |
| `IsAffiliatedExchangeOrFinra` | `bool` | Yes | Whether the user is affiliated with an exchange or FINRA (Financial Industry Regulatory Authority). |
| `IsPoliticallyExposed` | `bool` | Yes | Whether the user is a politically exposed person (PEP). PEPs are individuals who are or have been entrusted with prominent public functions. |
| `ImmediateFamilyExposed` | `bool` | Yes | Whether the user's immediate family member is a politically exposed person. |
| `FundingSources` | `repeated FundingSource` | No | List of funding sources for the account. See `FundingSource` enum below. |

**Use Cases:**
- Alpaca broker compliance
- Regulatory disclosure requirements
- Risk assessment
- Anti-money laundering (AML) compliance

**Important Notes:**
- These disclosures are specific to Alpaca Markets requirements
- Control person and PEP status may affect trading restrictions
- Funding sources help with AML compliance

### Enums

#### LiquidationImportance

Importance of being able to convert investments to cash quickly.

| Value | Number | Description |
|-------|--------|-------------|
| `VERY_IMPORTANT` | 0 | Liquidity is very important. User needs quick access to cash. |
| `SOMEWHAT_IMPORTANT` | 1 | Liquidity is somewhat important. User values some ability to convert to cash. |
| `NOT_IMPORTANT` | 2 | Liquidity is not important. User is comfortable with long-term investments. |
| `NO_PREFERENCE` | 3 | User has no preference regarding liquidity. |

**Use Cases:**
- Suitability assessment
- Product recommendation
- Risk profiling

#### RiskTolerance

Investor's risk tolerance level, from conservative to aggressive.

| Value | Number | Description |
|-------|--------|-------------|
| `CONSERVATIVE` | 0 | Conservative risk tolerance. Prefers low-risk, stable investments. |
| `MODERATELY_CONSERVATIVE` | 1 | Moderately conservative. Prefers mostly low-risk investments with some moderate risk. |
| `MODERATE` | 2 | Moderate risk tolerance. Comfortable with balanced risk/return profile. |
| `MODERATELY_AGGRESSIVE` | 3 | Moderately aggressive. Comfortable with higher risk for higher potential returns. |
| `SIGNIFICANT_RISK` | 4 | Significant risk tolerance. Comfortable with high-risk, high-reward investments. |

**Use Cases:**
- Suitability assessment
- Product filtering
- Risk management
- Regulatory compliance

#### InvestmentObjective

Primary investment objective or goal.

| Value | Number | Description |
|-------|--------|-------------|
| `INCOME` | 0 | Primary objective is generating income. Focus on dividend-paying investments. |
| `BALANCED` | 1 | Balanced approach between income and growth. |
| `GROWTH_AND_INCOME` | 2 | Seeks both growth and income. Balanced portfolio approach. |
| `SAFE_LONG_TERM_GROWTH` | 3 | Seeks safe, long-term growth with lower risk. |
| `GREATER_RISK_LONG_TERM_GROWTH` | 4 | Seeks long-term growth and is willing to accept greater risk. |
| `SPECULATION` | 5 | Primary objective is speculation. High-risk, short-term trading approach. |

**Use Cases:**
- Suitability assessment
- Portfolio construction
- Product recommendations
- Regulatory compliance

#### FundingSource

Sources of funds for trading account.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_FUNDING_SOURCE` | 0 | Default/unused value. Should not be used. |
| `EMPLOYMENT_INCOME` | 1 | Funds from employment income (salary, wages). |
| `INVESTMENTS` | 2 | Funds from other investments (proceeds from sales, dividends). |
| `INHERITANCE` | 3 | Funds from inheritance. |
| `BUSINESS_INCOME` | 4 | Funds from business income (self-employment, business profits). |
| `SAVINGS` | 5 | Funds from personal savings. |
| `FAMILY` | 6 | Funds provided by family members. |

**Use Cases:**
- AML compliance
- Source of funds verification
- Risk assessment
- Regulatory reporting

**Important Notes:**
- Multiple funding sources can be specified
- Used for anti-money laundering (AML) compliance
- May require documentation for verification

---

## user-kyc.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

This file defines KYC (Know Your Customer) related structures including personal identification details, employment information, and KYC verification status. Supports comprehensive KYC data collection and verification tracking.

### Messages

#### IDNumber

Represents an identification number with issuing country and identification class information.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `IssuingCountry` | `string` | No | ISO country code of the country that issued the identification document. |
| `IdentificationClass` | `string` | No | Type or class of identification (e.g., "PASSPORT", "DRIVERS_LICENSE", "NATIONAL_ID"). |
| `IdentificationNumber` | `string` | No | The actual identification number from the document. |

**Use Cases:**
- ID document storage
- KYC verification
- Identity verification

#### UserKYCDetails

Complete KYC verification details including personal information, identification numbers, and address.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Birthdate` | `string` | No | User's date of birth. Format may vary but typically ISO 8601 or similar. |
| `PhoneNumber` | `string` | No | User's phone number. May include country code. |
| `EmailAddress` | `string` | No | User's email address. May differ from the UserID email. |
| `AddressStreet1` | `string` | No | Primary street address line. |
| `AddressStreet2` | `string` | No | Secondary street address line (apartment, suite, etc.). |
| `AddressCity` | `string` | No | City name. |
| `AddressSubdivision` | `string` | No | State, province, or subdivision name. |
| `AddressPostalCode` | `string` | No | Postal or ZIP code. |
| `CountryCode` | `string` | No | ISO country code for the address. |
| `SocialSecurityNumber` | `string` | No | Social Security Number (US) or equivalent national identification number. |
| `IdentificationNumber` | `string` | No | Alternative identification number. |
| `FirstName` | `string` | No | Legal first name as it appears on identification documents. |
| `LastName` | `string` | No | Legal last name as it appears on identification documents. |

**Use Cases:**
- KYC verification
- Identity verification
- Regulatory compliance
- Address verification

**Important Notes:**
- This information is sensitive and should be encrypted at rest
- Used for KYC provider integration
- May be required for regulatory compliance in various jurisdictions

#### Employment

Employment information including employer details, job title, income, and verification status.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `EmployerName` | `string` | No | Name of the employer or company. |
| `JobTitle` | `string` | No | User's job title or position. |
| `StartDate` | `google.protobuf.Timestamp` | No | Employment start date. |
| `EndDate` | `google.protobuf.Timestamp` | No | Employment end date. Empty/null if still employed. |
| `Type` | `EmploymentType` | No | Type of employment. See `EmploymentType` enum below. |
| `Industry` | `optional string` | No | Industry sector of the employer. |
| `Income` | `Income` | No | Income information including amount, currency, and frequency. See Income message below. |
| `Contact` | `EmployerContact` | No | Employer contact information for verification. See EmployerContact message below. |
| `IsVerified` | `bool` | No | Whether the employment information has been verified. |
| `VerifiedAt` | `string` | No | Timestamp or date when the employment was verified. |

**Use Cases:**
- Employment verification
- Income verification
- KYC compliance
- Suitability assessment

**Important Notes:**
- `EndDate` is null/empty for current employment
- `IsVerified` indicates if verification has been completed
- `Contact` information is used for employment verification processes

#### Income

Income information including amount, currency, and payment frequency.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Amount` | `float` | No | Income amount. The actual value depends on the frequency. |
| `Currency` | `string` | No | Currency code (e.g., "USD", "CAD", "EUR"). |
| `Frequency` | `IncomeFrequency` | No | How often the income is received. See `IncomeFrequency` enum below. |

**Use Cases:**
- Income reporting
- Suitability assessment
- Compliance questionnaires
- Financial verification

**Important Notes:**
- `Amount` represents the income per `Frequency` period
- Annual income can be calculated by multiplying amount by frequency multiplier
- Used in compliance questionnaires (e.g., USA questionnaire)

#### EmployerContact

Contact information for the employer, used for verification purposes.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Name` | `string` | No | Contact person's name at the employer. |
| `Email` | `string` | No | Contact email address. |
| `Phone` | `string` | No | Contact phone number. |
| `Address` | `string` | No | Employer's physical address. |

**Use Cases:**
- Employment verification
- Contact for verification processes
- Reference information

### Enums

#### EmploymentType

Types of employment arrangements.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_EMPLOYMENTTYPE` | 0 | Default/unused value. Should not be used. |
| `FULL_TIME` | 1 | Full-time employment. Typically 40+ hours per week. |
| `PART_TIME` | 2 | Part-time employment. Less than full-time hours. |
| `CONTRACT` | 3 | Contract-based employment. Fixed-term contract. |
| `FREELANCE` | 4 | Freelance work. Independent contractor. |
| `SELF_EMPLOYED` | 5 | Self-employed. Owns and operates their own business. |
| `INTERNSHIP` | 6 | Internship position. Temporary training position. |

**Use Cases:**
- Employment classification
- Income verification
- Suitability assessment

#### IncomeFrequency

Frequency of income payments.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_INCOMEFREQUENCY` | 0 | Default/unused value. Should not be used. |
| `HOURLY` | 1 | Income paid hourly. |
| `WEEKLY` | 2 | Income paid weekly. |
| `BI_WEEKLY` | 3 | Income paid bi-weekly (every two weeks). |
| `MONTHLY` | 4 | Income paid monthly. |
| `ANNUALLY` | 5 | Income paid annually. |

**Use Cases:**
- Income reporting
- Annual income calculation
- Financial verification

**Important Notes:**
- Used to calculate annual income for compliance questionnaires
- Different frequencies require different multipliers to annualize

#### KYCStatus

Status of KYC verification process.

| Value | Number | Description |
|-------|--------|-------------|
| `KYC_STATUS_UNSPECIFIED` | 0 | Default value, should not be used. Indicates status is not set. |
| `KYC_STATUS_PENDING` | 1 | Inquiry created but not completed. User has started but not finished the KYC process. |
| `KYC_STATUS_IN_REVIEW` | 2 | Inquiry submitted but under manual review. KYC provider is reviewing the submission. |
| `KYC_STATUS_APPROVED` | 3 | Inquiry completed and approved. User has passed KYC verification. |
| `KYC_STATUS_REJECTED` | 4 | Inquiry completed and explicitly rejected. User failed KYC verification. |
| `KYC_STATUS_FAILED` | 5 | Inquiry failed due to an error (e.g., document mismatch, bad image quality). Technical failure rather than rejection. |
| `KYC_STATUS_EXPIRED` | 6 | Inquiry expired (e.g., not completed in time). User did not complete the process within the required timeframe. |

**Use Cases:**
- KYC process tracking
- User access control
- Compliance monitoring
- Status reporting

**Important Notes:**
- `KYC_STATUS_APPROVED` is required for full system access in many cases
- `KYC_STATUS_FAILED` indicates a technical issue, while `KYC_STATUS_REJECTED` indicates a compliance issue
- `KYC_STATUS_EXPIRED` may require starting a new inquiry
- Status transitions should be tracked for audit purposes

---

## Version and Support

This documentation corresponds to the current version of the user model. For version-specific changes, refer to the git history and release notes.

---

## Support

For questions or issues related to the user model:
- Review the main README.md for setup and usage instructions
- Check the proto file comments for field-specific documentation
- Consult the integration examples in the `/client` directory
