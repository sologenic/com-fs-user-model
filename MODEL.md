# User Model Documentation

This document provides comprehensive documentation for all Protocol Buffer (`.proto`) files in the `com-fs-user-model` repository. The user model is designed to support multi-organizational user management with comprehensive KYC, compliance, and trading profile capabilities.

## Table of Contents

1. [Overview](#overview)
2. [user.proto](#userproto) - Core user model and definitions
3. [user-fundings.proto](#user-fundingsproto) - Wallet, bank account, and broker account definitions
4. [user-filters.proto](#user-filtersproto) - Filtering and query messages
5. [user-compliance.proto](#user-complianceproto) - Compliance questionnaires and disclosures
6. [user-kyc.proto](#user-kycproto) - KYC (Know Your Customer) details and employment information
7. [user-grpc.proto](#user-grpcproto) - User gRPC service definitions
8. [adminuser-grpc.proto](#adminuser-grpcproto) - Admin user gRPC service definitions

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
| `Role` | `role.Role` | No | User's role in the system. Retail users always have a role of "NORMAL_USER". Admin and other roles are managed through the role system. |
| `TradeProfile` | `tradeprofile.TradeProfileDetails` | No | Trade profile details from the trade profile model. Contains trading preferences, risk settings, and trading history. |
| `KYCInquiries` | `repeated string` | No | Array of KYC integration IDs. Each string represents a unique identifier for a KYC verification inquiry with an external KYC provider. Used to track multiple KYC attempts or different provider integrations. |
| `KYCDetails` | `UserKYCDetails` | No | Complete KYC verification details including personal information, identification numbers, and address. See `user-kyc.proto` for definition. |
| `UserDocumentCompliance` | `document.UserDocumentCompliance` | No | Document compliance information from the document model. Tracks signed documents, compliance status, and document verification. |
| `KYCStatus` | `KYCStatus` | No | Current status of KYC verification. Values include PENDING, APPROVED, REJECTED, IN_REVIEW, FAILED, EXPIRED. See `user-kyc.proto` for KYCStatus enum. |
| `UserTradeProfile` | `tradeprofile.UserTradeProfile` | No | User trade profile from the trade profile model. Contains user-specific trading configuration and preferences. |
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
- Complete user entity retrieval from the service
- Multi-organization user management
- Audit trail tracking
- User cloning operations

**Important Notes:**
- The `User.OrganizationIDs` field is TX (transaction/organization) classified information and is never cloned when a user is cloned to a new organization
- The `User.Audit` field is also never cloned - each organization maintains its own audit history starting from when the user was cloned

#### Social

Represents a social media link or profile associated with the user.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `URL` | `string` | Yes | The full URL to the social media profile or website. |
| `Type` | `SocialType` | Yes | The type of social media platform. See `SocialType` enum below. |

**Use Cases:**
- User profile display
- Social verification
- Community engagement tracking

#### UserList

Container for paginated user lists returned from query operations.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Users` | `repeated User` | Yes | Array of user entities matching the query criteria. Each user contains complete information as described in the `User` message. |
| `Offset` | `optional int32` | No | The pagination offset that was used for this query. Useful for tracking pagination state and implementing "next page" functionality. |

**Use Cases:**
- Paginated user listing
- Search result display
- Bulk user operations

#### StatusMessage

Message for updating user account status within a specific organization context.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `string` | Yes | Email address identifying the user whose status should be changed. |
| `OrganizationID` | `string` | Yes | Organization context for the status change. Status changes are organization-specific. |
| `Status` | `UserStatus` | Yes | The new status to set. See `UserStatus` enum below. |
| `Network` | `optional metadata.Network` | No | Network context for the status change. Used when status changes are network-specific. |
| `Audit` | `audit.Audit` | Yes | Audit information for the status change. Must include who made the change (CreatedBy/UpdatedBy) and when (CreatedAt/UpdatedAt). |

**Use Cases:**
- Admin deactivating user accounts
- Reactivating previously deactivated accounts
- Compliance-related account suspensions

#### UISettings

User interface preferences and settings.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Theme` | `Theme` | Yes | UI theme preference. See `Theme` enum below. |

**Use Cases:**
- User preference storage
- UI customization
- Accessibility settings

#### DataFeedAccounts

Configuration for data feed accounts used for market data access.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `DxFeed` | `optional DxFeed` | No | DxFeed account configuration. DxFeed is a market data provider. |

**Use Cases:**
- Market data feed configuration
- Real-time trading data access

#### DxFeed

DxFeed account details.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountID` | `string` | Yes | DxFeed account identifier. Used to authenticate and access DxFeed market data services. |

### Enums

#### UserStatus

Represents the current status of a user account. Status is organization-specific - a user can be active in one organization and deactivated in another.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_USERSTATUS` | 0 | Default/unused value. Should not be used in production. |
| `ACTIVE` | 1 | User account is active and can perform all operations. User can log in, trade, and access all features. |
| `ADMIN_DEACTIVATED` | 2 | User account has been deactivated by an administrator. User cannot log in or perform operations. Existing sessions may be invalidated. Used for policy violations, security concerns, or compliance issues. |

**Use Cases:**
- Account access control
- Compliance enforcement
- Security management

#### SocialType

Supported social media platforms and website types for user social links.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_SOCIALTYPE` | 0 | Default/unused value. |
| `WEBSITE` | 1 | Personal or professional website URL. |
| `GITHUB` | 2 | GitHub profile URL. |
| `REDDIT` | 3 | Reddit profile URL. |
| `DISCORD` | 4 | Discord profile URL or invite link. |
| `TWITTER` | 5 | Twitter/X profile URL. |
| `FACEBOOK` | 6 | Facebook profile URL. |
| `TELEGRAM` | 7 | Telegram profile or channel URL. |
| `INSTAGRAM` | 8 | Instagram profile URL. |
| `LINKEDIN` | 9 | LinkedIn profile URL. |

#### Theme

User interface theme options.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_THEME` | 0 | Default/unused value. |
| `DARK` | 1 | Dark theme. Dark background with light text. Preferred for low-light environments. |
| `LIGHT` | 2 | Light theme. Light background with dark text. Traditional UI appearance. |

---

## user-fundings.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Defines structures for managing user funding sources including cryptocurrency wallets, traditional bank accounts, and broker trading accounts. This file is essential for handling deposits, withdrawals, and account linking operations.

### Messages

#### Wallet

Represents a cryptocurrency wallet associated with a user. Wallets can be linked to multiple organizations, allowing the same wallet address to be used across different organizational contexts.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Address` | `string` | Yes | The blockchain wallet address. Format depends on the blockchain network (e.g., Cosmos addresses start with "cosmos1", Ethereum addresses are 0x-prefixed hex strings). Must be a valid address for the target blockchain. |
| `Alias` | `string` | No | User-friendly name for the wallet. Helps users identify and manage multiple wallets (e.g., "My Trading Wallet", "Savings Wallet"). |
| `Type` | `WalletType` | Yes | Type of wallet account. Used primarily for tax-advantaged accounts in Canada. See `WalletType` enum below. |
| `SignerType` | `SignerType` | Yes | Method used to sign transactions from this wallet. Determines which wallet application or extension is used. See `SignerType` enum below. |
| `Organizations` | `repeated string` | No | List of organization UUIDs linked to this wallet address. Allows the same wallet to be used across multiple organizations. When a wallet is registered in a new organization, that organization's ID is added to this list. |

**Use Cases:**
- User wallet registration
- Multi-organization wallet sharing
- Transaction signing configuration
- Tax-advantaged account management (TFSA, RRSP)

**Important Notes:**
- Wallet addresses should be validated for the target blockchain network
- The same wallet address can be associated with multiple organizations
- SignerType determines which wallet application will be used for transaction signing

#### BankAccount

Represents a traditional bank account for fiat currency deposits and withdrawals.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountName` | `string` | Yes | Name on the bank account. Must match the account holder's legal name for verification purposes. |
| `BankName` | `string` | Yes | Name of the bank. Also serves as the user's identifier in the bank account system. |
| `BankAddress` | `string` | No | Physical address of the bank branch. Used for verification and compliance purposes. |
| `AccountNumber` | `string` | Yes | Bank account number. Sensitive information that should be encrypted at rest. |
| `ABA` | `string` | No | ABA routing number (US banks). 9-digit code used for US domestic wire transfers and ACH transactions. |
| `SWIFT` | `string` | No | SWIFT/BIC code. International bank identifier code used for international wire transfers. Format: 8-11 alphanumeric characters. |
| `IBAN` | `string` | No | International Bank Account Number. Used primarily in European countries. Format varies by country but typically 15-34 alphanumeric characters. |

**Use Cases:**
- Fiat currency deposits
- Withdrawal processing
- Bank account verification
- International wire transfers
- ACH transactions (US)

**Security Considerations:**
- Account numbers, ABA, SWIFT, and IBAN are sensitive financial information
- Should be encrypted at rest and in transit
- Access should be restricted to authorized personnel only
- Compliance with PCI-DSS and financial regulations required

#### BrokerAccount

Represents a trading account with a broker clearing firm. Links a user to a specific broker and organization for trading operations.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `AccountID` | `string` | Yes | User's unique identifier in the broker's system. This is the account identifier provided by the broker (e.g., Alpaca account ID, RQD account ID). |
| `Broker` | `order.ClearingBroker` | Yes | The clearing broker identifier. Values come from the order model (e.g., "RQD", "ALPACA"). Determines which broker API to use for trading operations. |
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

### Enums

#### SignerType

Methods for signing blockchain transactions. Determines which wallet application or extension will be used.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USER_SIGNETTYPE` | 0 | Default/unused value. Should not be used. |
| `MOBILE_APP` | 1 | Mobile application wallet. User signs transactions using a mobile wallet app (e.g., Cosmostation mobile, Keplr mobile). |
| `BROWSER_LEAP` | 2 | Leap browser extension. Leap is a Cosmos ecosystem wallet browser extension. |
| `BROWSER_COSMOSTATION` | 3 | Cosmostation browser extension. Cosmostation is a popular Cosmos ecosystem wallet. |
| `BROWSER_KEPLR` | 4 | Keplr browser extension. Keplr is the most popular Cosmos ecosystem wallet browser extension. |

**Use Cases:**
- Transaction signing configuration
- Wallet integration setup
- User onboarding flow

#### WalletType

Types of wallet accounts, primarily used for Canadian tax-advantaged accounts.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_WALLETTYPE` | 0 | Default/unused value. |
| `TFSA` | 1 | Tax-Free Savings Account (Canada). Contributions are made with after-tax dollars, but investment growth and withdrawals are tax-free. Has annual contribution limits. |
| `RRSP` | 2 | Registered Retirement Savings Plan (Canada). Contributions are tax-deductible, and investment growth is tax-deferred until withdrawal. Has annual contribution limits based on income. |
| `STANDARD` | 3 | Standard wallet account. Regular taxable account with no special tax advantages. Most common wallet type. |

**Use Cases:**
- Tax-advantaged account management
- Canadian user account setup
- Regulatory compliance
- Tax reporting

---

## user-filters.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Provides filtering and querying capabilities for user operations. Used by both the UserService and AdminUserService for searching and retrieving users based on various criteria.

### Messages

#### Filter

Comprehensive filter message for querying users with multiple filter options. All filter criteria are combined with AND logic - a user must match all specified criteria to be included in results.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserIDs` | `repeated string` | No | Array of specific user IDs (email addresses) to retrieve. If provided, only users matching these exact IDs are returned. Useful for bulk retrieval of known users. |
| `Network` | `optional metadata.Network` | No | Filter by blockchain network. Returns only users associated with the specified network (e.g., MAINNET, TESTNET). |
| `OrganizationID` | `string` | Yes | **Required.** Organization context for the query. All results are scoped to this organization. Users from other organizations are excluded even if they match other criteria. |
| `Offset` | `optional int32` | No | Pagination offset. Number of results to skip before returning results. Used with `Limit` for pagination. Defaults to 0 if not specified. |
| `Limit` | `optional int32` | No | Maximum number of results to return. Used for pagination to limit result set size. If not specified, a default limit is applied (typically 50-100). Setting too high may cause performance issues or timeouts. |
| `InquiryID` | `optional string` | No | Filter by KYC inquiry ID. Returns only users associated with a specific KYC verification inquiry. Useful for tracking users through the KYC process or finding users by their KYC provider inquiry ID. |
| `Status` | `optional UserStatus` | No | Filter by user account status. Returns only users with the specified status (ACTIVE, ADMIN_DEACTIVATED). Useful for finding active users, deactivated users, or users needing attention. |
| `ExternalUserIDs` | `repeated string` | No | Filter by external user identifiers. Returns users matching any of the provided external user IDs. Useful when you have external system IDs (e.g., from a KYC provider) and need to find the corresponding internal users. |
| `WalletAddress` | `optional string` | No | Filter by wallet address. Returns users who have a wallet with the specified address. Useful for finding users associated with specific blockchain addresses (e.g., for transaction verification, airdrops, or compliance checks). |
| `BrokerAccountID` | `optional string` | No | Filter by broker account identifier. Returns users who have a broker account with the specified account ID. Useful for finding users by their broker account number or linking broker account activity to users. |

**Use Cases:**
- Admin dashboard user listing
- Searching for users by wallet address
- Finding users with specific KYC status
- Listing users in an organization
- Paginated user management interfaces
- Compliance and audit queries

**Filter Logic:**
- All specified filters are combined with AND logic
- If multiple values are provided in a `repeated` field (e.g., `UserIDs`), results match ANY of those values (OR logic within that field)
- `OrganizationID` is always required and cannot be empty
- Results are always scoped to the specified organization

**Performance Considerations:**
- Use `Limit` to prevent large result sets
- Use `Offset` and `Limit` together for pagination
- Filters on indexed fields (UserID, OrganizationID) are faster than filters on non-indexed fields
- `WalletAddress` and `BrokerAccountID` filters may be slower on large datasets

**Example Usage:**
```json
{
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
  "Status": "ACTIVE",
  "Limit": 50,
  "Offset": 0
}
```

#### UserID

Simple message for identifying a specific user within an organization context. Used as input for operations that target a single user.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `string` | Yes | Email address identifying the user. This is the primary unique identifier. |
| `OrganizationID` | `string` | Yes | Organization context. Required because users can exist in multiple organizations with different data in each. |
| `Network` | `optional metadata.Network` | No | Network context. Used when operations are network-specific. If not provided, operations apply to all networks or the default network. |

**Use Cases:**
- Single user retrieval
- User-specific operations
- Status updates
- User deletion

**Important Notes:**
- Both `UserID` and `OrganizationID` are required
- The combination of `UserID` + `OrganizationID` uniquely identifies a user instance within an organization
- A user with the same `UserID` can exist in multiple organizations with different `OrganizationID` values

---

## user-compliance.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Defines compliance questionnaires and disclosures required for regulatory compliance. The model is designed to support multiple compliance frameworks including USA regulations and Alpaca-specific disclosures, with extensibility for additional frameworks like MiFID.

### Messages

#### ComplianceQuestions

Container for multiple compliance questionnaires. Designed to be extensible to support additional compliance frameworks beyond USA and Alpaca.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `USA` | `optional USA` | No | USA regulatory compliance questionnaire. Contains investor profile information required for US securities trading. See `USA` message below. |
| `AlpacaDisclosures` | `optional AlpacaDisclosures` | No | Alpaca-specific disclosures and compliance information. Required for users trading through Alpaca Markets. See `AlpacaDisclosures` message below. |

**Use Cases:**
- Multi-framework compliance support
- Regulatory requirement fulfillment
- Broker-specific compliance
- Investor suitability assessment

**Extensibility:**
The model is designed to support additional compliance frameworks. Future additions might include:
- MiFID (Markets in Financial Instruments Directive) for European users
- Other regional or broker-specific compliance requirements

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
- Subject to regulatory audit requirements

#### AlpacaDisclosures

Alpaca Markets-specific disclosures and compliance information. Required for users trading through Alpaca's brokerage services.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `RecordedAt` | `google.protobuf.Timestamp` | Yes | Timestamp when the disclosures were completed. Used for compliance tracking. |
| `IsControlPerson` | `bool` | Yes | Whether the user is a control person (e.g., director, officer, or beneficial owner of 10% or more of a class of equity securities). Control persons are subject to additional trading restrictions. |
| `IsAffiliatedExchangeOrFinra` | `bool` | Yes | Whether the user is affiliated with an exchange or FINRA (Financial Industry Regulatory Authority). Affiliated persons may have trading restrictions. |
| `IsPoliticallyExposed` | `bool` | Yes | Whether the user is a Politically Exposed Person (PEP). PEPs are individuals who hold prominent public positions and may be subject to enhanced due diligence. |
| `ImmediateFamilyExposed` | `bool` | Yes | Whether the user's immediate family member is a Politically Exposed Person. Includes spouses, children, parents, and siblings. |
| `FundingSources` | `repeated FundingSource` | Yes | Array of funding sources for the account. Users can select multiple sources. See `FundingSource` enum below. Used for anti-money laundering (AML) compliance. |

**Use Cases:**
- Alpaca broker account setup
- AML compliance
- PEP screening
- Regulatory disclosures

**Compliance Notes:**
- Required for all Alpaca users
- Used for AML and KYC compliance
- PEP status may trigger enhanced due diligence
- Control person status affects trading permissions

### Enums

#### LiquidationImportance

Importance of liquidity and ability to convert investments to cash quickly.

| Value | Number | Description |
|-------|--------|-------------|
| `VERY_IMPORTANT` | 0 | Liquidity is very important. User needs quick access to cash and cannot tolerate illiquid investments. |
| `SOMEWHAT_IMPORTANT` | 1 | Liquidity is somewhat important. User prefers liquid investments but can tolerate some illiquidity. |
| `NOT_IMPORTANT` | 2 | Liquidity is not important. User can tolerate illiquid investments and does not need quick access to cash. |
| `NO_PREFERENCE` | 3 | User has no preference regarding liquidity. |

#### RiskTolerance

Investor's risk tolerance level, from conservative to aggressive.

| Value | Number | Description |
|-------|--------|-------------|
| `CONSERVATIVE` | 0 | Very low risk tolerance. Prefers capital preservation over growth. Suitable for low-risk investments like bonds and money market funds. |
| `MODERATELY_CONSERVATIVE` | 1 | Low to moderate risk tolerance. Prefers stable investments with some growth potential. Suitable for balanced portfolios. |
| `MODERATE` | 2 | Moderate risk tolerance. Willing to accept moderate risk for moderate returns. Suitable for diversified stock and bond portfolios. |
| `MODERATELY_AGGRESSIVE` | 3 | Moderate to high risk tolerance. Willing to accept higher risk for higher potential returns. Suitable for growth-oriented portfolios. |
| `SIGNIFICANT_RISK` | 4 | High risk tolerance. Willing to accept significant risk for high potential returns. Suitable for aggressive growth strategies and speculative investments. |

#### InvestmentObjective

Primary investment objective or goal.

| Value | Number | Description |
|-------|--------|-------------|
| `INCOME` | 0 | Primary objective is generating income. Focus on dividend-paying stocks, bonds, and income-generating investments. |
| `BALANCED` | 1 | Balanced approach seeking both income and growth. Diversified portfolio with mix of stocks and bonds. |
| `GROWTH_AND_INCOME` | 2 | Seeks both capital appreciation and income generation. Balanced growth and income strategy. |
| `SAFE_LONG_TERM_GROWTH` | 3 | Seeks long-term capital appreciation with lower risk. Focus on stable, established companies. |
| `GREATER_RISK_LONG_TERM_GROWTH` | 4 | Seeks long-term capital appreciation with higher risk tolerance. Focus on growth stocks and emerging markets. |
| `SPECULATION` | 5 | High-risk, high-reward speculative trading. Short-term trading, options, and high-volatility investments. |

#### FundingSource

Sources of funds for the trading account. Used for AML compliance and to understand the origin of deposited funds.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_FUNDING_SOURCE` | 0 | Default/unused value. |
| `EMPLOYMENT_INCOME` | 1 | Funds from employment income (salary, wages). |
| `INVESTMENTS` | 2 | Funds from other investments (proceeds from sale of securities, dividends, etc.). |
| `INHERITANCE` | 3 | Funds received from inheritance. |
| `BUSINESS_INCOME` | 4 | Funds from business income (self-employment, business profits). |
| `SAVINGS` | 5 | Funds from personal savings. |
| `FAMILY` | 6 | Funds received from family members (gifts, loans, etc.). |

**AML Compliance:**
- Multiple funding sources can be selected
- Used to verify legitimate source of funds
- May trigger additional verification for certain sources
- Required for regulatory compliance

---

## user-kyc.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Defines structures for KYC (Know Your Customer) verification, including personal identification information, employment details, and KYC status tracking. This file is essential for regulatory compliance and identity verification.

### Messages

#### IDNumber

Represents an identification number from an official document (passport, driver's license, national ID, etc.).

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `IssuingCountry` | `string` | Yes | ISO 3166-1 alpha-2 or alpha-3 country code where the ID was issued (e.g., "US", "CA", "GBR"). |
| `IdentificationClass` | `string` | Yes | Type of identification document (e.g., "PASSPORT", "DRIVERS_LICENSE", "NATIONAL_ID", "SSN"). |
| `IdentificationNumber` | `string` | Yes | The actual identification number from the document. Sensitive information that should be encrypted. |

**Use Cases:**
- KYC document verification
- Identity verification
- Regulatory compliance

**Security Considerations:**
- Identification numbers are highly sensitive PII
- Must be encrypted at rest and in transit
- Access should be restricted and audited
- Subject to GDPR, CCPA, and other privacy regulations

#### UserKYCDetails

Complete KYC verification information including personal details, address, and identification numbers.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Birthdate` | `string` | Yes | Date of birth. Format should be consistent (e.g., "YYYY-MM-DD" or ISO 8601). Used for age verification and identity matching. |
| `PhoneNumber` | `string` | Yes | Phone number including country code. Format: international format (e.g., "+1234567890"). Used for verification and communication. |
| `EmailAddress` | `string` | Yes | Email address. Should match the UserID when possible. Used for verification and communication. |
| `AddressStreet1` | `string` | Yes | Primary street address line. Building number and street name. |
| `AddressStreet2` | `string` | No | Secondary address line. Apartment number, suite, unit, etc. |
| `AddressCity` | `string` | Yes | City name. |
| `AddressSubdivision` | `string` | Yes | State, province, or subdivision. For US: state code (e.g., "CA", "NY"). For Canada: province code (e.g., "ON", "BC"). |
| `AddressPostalCode` | `string` | Yes | Postal or ZIP code. Format varies by country. |
| `CountryCode` | `string` | Yes | ISO 3166-1 alpha-2 or alpha-3 country code (e.g., "US", "CA", "GBR"). |
| `SocialSecurityNumber` | `string` | No | Social Security Number (US) or Social Insurance Number (Canada). Highly sensitive - must be encrypted. Format: "XXX-XX-XXXX" for US. |
| `IdentificationNumber` | `string` | No | Alternative identification number. Can be passport number, driver's license number, or other official ID. |
| `FirstName` | `string` | Yes | Legal first name. Must match government-issued ID. |
| `LastName` | `string` | Yes | Legal last name. Must match government-issued ID. |

**Use Cases:**
- KYC verification submission
- Identity verification
- Address verification
- Regulatory compliance
- Anti-fraud measures

**Important Notes:**
- All fields should match government-issued identification documents
- Mismatches may cause KYC verification to fail
- Information is typically verified against external KYC providers
- Updates may require re-verification

#### Employment

Employment information including employer details, job title, income, and verification status.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `EmployerName` | `string` | Yes | Name of the employer or company. |
| `JobTitle` | `string` | Yes | Job title or position. |
| `StartDate` | `google.protobuf.Timestamp` | Yes | Employment start date. Used to calculate years of employment. |
| `EndDate` | `google.protobuf.Timestamp` | No | Employment end date. If empty/null, the user is currently employed. Used to determine current employment status. |
| `Type` | `EmploymentType` | Yes | Type of employment. See `EmploymentType` enum below. |
| `Industry` | `optional string` | No | Industry sector (e.g., "Technology", "Finance", "Healthcare"). Used for compliance and risk assessment. |
| `Income` | `Income` | Yes | Income information. See `Income` message below. |
| `Contact` | `EmployerContact` | Yes | Employer contact information for verification. See `EmployerContact` message below. |
| `IsVerified` | `bool` | Yes | Whether the employment information has been verified. Verification may involve contacting the employer or checking third-party databases. |
| `VerifiedAt` | `string` | No | Timestamp or date when verification was completed. Format: ISO 8601 string or similar. |

**Use Cases:**
- Income verification
- Employment verification
- Suitability assessment
- Compliance requirements
- Risk assessment

#### Income

Income amount, currency, and frequency information.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Amount` | `float` | Yes | Income amount. The unit depends on `Frequency` (e.g., if Frequency is MONTHLY, this is monthly income). |
| `Currency` | `string` | Yes | ISO 4217 currency code (e.g., "USD", "CAD", "EUR"). |
| `Frequency` | `IncomeFrequency` | Yes | How often the income is received. See `IncomeFrequency` enum below. Used to calculate annual income. |

**Use Cases:**
- Income verification
- Suitability assessment
- Annual income calculation
- Compliance reporting

**Calculation Notes:**
- Annual income = Amount × frequency multiplier
- Frequency multipliers: HOURLY (assume 2000 hours/year), WEEKLY (52), BI_WEEKLY (26), MONTHLY (12), ANNUALLY (1)

#### EmployerContact

Contact information for the employer, used for verification purposes.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `Name` | `string` | Yes | Contact person's name (e.g., HR manager, supervisor). |
| `Email` | `string` | Yes | Contact email address. |
| `Phone` | `string` | Yes | Contact phone number. |
| `Address` | `string` | Yes | Employer's business address. |

**Use Cases:**
- Employment verification
- Income verification
- Compliance checks

### Enums

#### EmploymentType

Types of employment arrangements.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_EMPLOYMENTTYPE` | 0 | Default/unused value. |
| `FULL_TIME` | 1 | Full-time employment. Typically 35-40+ hours per week with benefits. |
| `PART_TIME` | 2 | Part-time employment. Typically less than 35 hours per week. |
| `CONTRACT` | 3 | Contract employment. Fixed-term contract with specific end date. |
| `FREELANCE` | 4 | Freelance or independent contractor. Self-employed on a project basis. |
| `SELF_EMPLOYED` | 5 | Self-employed. Owns and operates their own business. |
| `INTERNSHIP` | 6 | Internship position. Temporary position for learning/training. |

#### IncomeFrequency

Frequency of income payments.

| Value | Number | Description |
|-------|--------|-------------|
| `NOT_USED_INCOMEFREQUENCY` | 0 | Default/unused value. |
| `HOURLY` | 1 | Hourly wage. Income is paid per hour worked. |
| `WEEKLY` | 2 | Weekly salary. Income is paid every week. |
| `BI_WEEKLY` | 3 | Bi-weekly salary. Income is paid every two weeks (26 pay periods per year). |
| `MONTHLY` | 4 | Monthly salary. Income is paid once per month (12 pay periods per year). |
| `ANNUALLY` | 5 | Annual salary. Total annual income amount. |

#### KYCStatus

Status of KYC verification process. Tracks the current state of a user's KYC verification.

| Value | Number | Description |
|-------|--------|-------------|
| `KYC_STATUS_UNSPECIFIED` | 0 | Default value. Should not be used in production. Indicates KYC status has not been set. |
| `KYC_STATUS_PENDING` | 1 | KYC inquiry has been created but not yet completed by the user. User has started but not finished the KYC process. |
| `KYC_STATUS_IN_REVIEW` | 2 | KYC inquiry has been submitted and is under manual or automated review. Documents and information are being verified. |
| `KYC_STATUS_APPROVED` | 3 | KYC verification has been completed and approved. User is verified and can proceed with full account access. |
| `KYC_STATUS_REJECTED` | 4 | KYC verification has been explicitly rejected. User's information did not pass verification. May require resubmission or appeal. |
| `KYC_STATUS_FAILED` | 5 | KYC inquiry failed due to an error. Examples: document mismatch, poor image quality, system error, timeout. User may retry. |
| `KYC_STATUS_EXPIRED` | 6 | KYC inquiry expired. User did not complete the process within the required time frame. User must start a new inquiry. |

**Status Flow:**
Typical flow: PENDING → IN_REVIEW → APPROVED (or REJECTED/FAILED)

**Use Cases:**
- KYC process tracking
- Account access control
- Compliance monitoring
- User onboarding status

---

## user-grpc.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Defines the gRPC service interface for user operations. This service provides endpoints for retrieving, listing, creating/updating users, and managing user status. This is the primary service for user management operations.

### Service: UserService

The `UserService` provides gRPC endpoints for managing user entities. This service handles user retrieval, listing, creation/updates, and status management operations.

**Authentication & Authorization:**
- All methods require proper authentication
- Some methods may require admin privileges depending on organization configuration
- Organization context is always validated against the authenticated user's permissions

**Error Handling:**
- All methods return gRPC status codes following standard gRPC error conventions
- Common error codes:
  - `NOT_FOUND`: User or resource not found
  - `INVALID_ARGUMENT`: Invalid parameter values
  - `PERMISSION_DENIED`: Insufficient permissions
  - `INTERNAL`: Server-side errors

### RPC Methods

#### `Get` - Retrieve a Single User

**Signature:**
```protobuf
rpc Get (UserID) returns (User)
```

**Description:**
Retrieves a complete user entity by user ID and organization ID. Returns the full user object including all details, metadata, audit information, and associated data (wallets, KYC details, compliance information, etc.).

**Parameters:**
- **Request:** `UserID`
  - `UserID` (string, required): The email address used for Firebase authentication that uniquely identifies the user
  - `OrganizationID` (string, required): The UUID of the organization context in which to retrieve the user. Users can exist in multiple organizations, so this parameter determines which organization's view of the user to return
  - `Network` (optional metadata.Network): Optional network filter. If provided, filters results to the specified network

**Returns:**
- **Response:** `User`
  - Complete user entity containing:
    - `User`: Full `UserDetails` object with all user information
    - `MetaData`: Metadata associated with the user record
    - `Audit`: Audit trail information showing creation and modification history
    - `OrganizationIDs`: List of all organizations where this user exists

**Behavior:**
- The service retrieves the user from the specified organization context
- If the user does not exist in the specified organization, an error is returned
- The response includes all nested data (wallets, broker accounts, KYC details, etc.)
- Audit information reflects changes made within the organization context
- Results are scoped to the authenticated user's permissions

**Use Cases:**
- Displaying user profile information in the UI
- Admin viewing user details for support purposes
- Retrieving user data for processing transactions
- Accessing user's organization memberships
- User profile page display

**Error Conditions:**
- User not found in the specified organization (NOT_FOUND)
- Invalid `UserID` format (INVALID_ARGUMENT)
- Invalid `OrganizationID` format (INVALID_ARGUMENT)
- Insufficient permissions (PERMISSION_DENIED)
- Network/connectivity issues (UNAVAILABLE)

**Example Request:**
```json
{
  "UserID": "user@example.com",
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
  "Network": "MAINNET"
}
```

**Example Response:**
```json
{
  "User": {
    "UserID": "user@example.com",
    "FirstName": "John",
    "LastName": "Doe",
    "Status": "ACTIVE",
    "Wallets": [...],
    "KYCDetails": {...},
    ...
  },
  "MetaData": {...},
  "Audit": {...},
  "OrganizationIDs": ["org-1", "org-2"]
}
```

---

#### `List` - Retrieve Multiple Users with Filtering

**Signature:**
```protobuf
rpc List (Filter) returns (UserList)
```

**Description:**
Retrieves a list of users matching the specified filter criteria. Supports multiple filtering options, pagination, and returns a collection of user entities. This is the primary method for querying and searching users within an organization.

**Parameters:**
- **Request:** `Filter` (see `user-filters.proto` for complete field documentation)
  - `UserIDs` (repeated string, optional): Array of specific user IDs to retrieve
  - `Network` (optional metadata.Network): Filter by blockchain network
  - `OrganizationID` (string, required): Organization context for the query
  - `Offset` (optional int32): Pagination offset
  - `Limit` (optional int32): Maximum number of results
  - `InquiryID` (optional string): Filter by KYC inquiry ID
  - `Status` (optional UserStatus): Filter by user account status
  - `ExternalUserIDs` (repeated string, optional): Filter by external user identifiers
  - `WalletAddress` (optional string): Find users by their wallet address
  - `BrokerAccountID` (optional string): Filter by broker account identifier

**Returns:**
- **Response:** `UserList`
  - `Users` (repeated User): Array of user entities matching the filter criteria
  - `Offset` (optional int32): The offset value that was used for this query

**Behavior:**
- Multiple filter criteria can be combined (AND logic)
- Results are always scoped to the specified `OrganizationID`
- If no users match the criteria, an empty array is returned (not an error)
- Results are ordered by a default sort order (typically by creation date or user ID)
- Pagination is handled via `Offset` and `Limit` parameters
- Maximum `Limit` value is enforced by the server

**Use Cases:**
- Admin dashboard displaying all users in an organization
- Searching for users by wallet address (e.g., for transaction verification)
- Finding users with specific KYC status
- Listing users associated with a broker account
- Paginated user management interfaces
- Compliance and audit queries

**Error Conditions:**
- Invalid `OrganizationID` format (INVALID_ARGUMENT)
- Invalid filter parameter values (INVALID_ARGUMENT)
- `Limit` exceeds maximum allowed value (INVALID_ARGUMENT)
- Insufficient permissions (PERMISSION_DENIED)
- Network/connectivity issues (UNAVAILABLE)

**Performance Considerations:**
- Use appropriate `Limit` values to avoid timeouts (recommended: 50-100)
- Filters on indexed fields (UserID, OrganizationID) are faster
- `WalletAddress` and `BrokerAccountID` filters may be slower on large datasets
- Consider caching results for frequently accessed queries

**Example Request:**
```json
{
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
  "Status": "ACTIVE",
  "Limit": 50,
  "Offset": 0,
  "WalletAddress": "cosmos1abc123..."
}
```

**Example Response:**
```json
{
  "Users": [
    {
      "User": {...},
      "MetaData": {...},
      "Audit": {...},
      "OrganizationIDs": [...]
    },
    ...
  ],
  "Offset": 0
}
```

---

#### `Upsert` - Create or Update a User

**Signature:**
```protobuf
rpc Upsert (User) returns (UserID)
```

**Description:**
Creates a new user or updates an existing user in the system. The operation is idempotent - if a user with the same `UserID` and `OrganizationID` already exists, it will be updated; otherwise, a new user is created. This method handles the complete user entity including all nested data.

**Parameters:**
- **Request:** `User`
  - Complete user entity as described in `user.proto`
  - `User.UserID` (string, required): Email address used for Firebase authentication
  - `User.OrganizationID` (string, required): The organization context
  - All other fields in `UserDetails` are optional and can be set during creation or update
  - `User.MetaData` (optional): Metadata to associate with the user record
  - `User.Audit` (optional): Audit information. Typically set automatically by the service
  - `User.OrganizationIDs` (repeated string): List of organizations. For new users, this should typically contain only the `OrganizationID`

**Returns:**
- **Response:** `UserID`
  - `UserID` (string): The user ID that was created or updated
  - `OrganizationID` (string): The organization ID where the user was created/updated
  - `Network` (optional metadata.Network): Network context if applicable

**Behavior:**
- **Create Mode:** If no user exists with the given `UserID` and `OrganizationID`, a new user is created with the provided data
- **Update Mode:** If a user already exists, all provided fields are updated. Fields not included in the request retain their existing values (partial update)
- The service automatically handles:
  - Setting default values for required fields
  - Generating audit timestamps
  - Validating data integrity
  - Managing organization relationships
- Nested objects (wallets, broker accounts, etc.) are updated according to the provided data
- The operation is transactional - either all updates succeed or none are applied
- If `User.OrganizationIDs` is provided, it should include the `OrganizationID` from `UserDetails.OrganizationID`

**Use Cases:**
- User registration (creating new users)
- Updating user profile information
- Adding wallets or broker accounts to a user
- Updating KYC or compliance information
- Modifying user settings or preferences
- Adding users to additional organizations

**Error Conditions:**
- Invalid `UserID` format (must be valid email) (INVALID_ARGUMENT)
- Invalid `OrganizationID` format (INVALID_ARGUMENT)
- Validation errors (e.g., invalid wallet address format, invalid date ranges) (INVALID_ARGUMENT)
- Duplicate wallet addresses within the same organization (ALREADY_EXISTS)
- Missing required fields for certain operations (FAILED_PRECONDITION)
- Permission/authorization errors (PERMISSION_DENIED)
- Data conflicts (ABORTED)

**Important Notes:**
- This is an idempotent operation - calling it multiple times with the same data has the same effect
- Partial updates are supported - only include fields you want to update
- Nested arrays (e.g., `Wallets`) replace the entire array, not merged
- To add a wallet without removing existing ones, include all existing wallets plus the new one

**Example Request (Create):**
```json
{
  "User": {
    "UserID": "newuser@example.com",
    "FirstName": "Jane",
    "LastName": "Smith",
    "Status": "ACTIVE",
    "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
    "Wallets": [
      {
        "Address": "cosmos1xyz789...",
        "Type": "STANDARD",
        "SignerType": "BROWSER_KEPLR"
      }
    ]
  },
  "OrganizationIDs": ["123e4567-e89b-12d3-a456-426614174000"]
}
```

**Example Request (Update):**
```json
{
  "User": {
    "UserID": "existing@example.com",
    "FirstName": "John Updated",
    "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
    "Wallets": [
      {
        "Address": "cosmos1new123...",
        "Type": "STANDARD",
        "Organizations": ["org-1", "org-2"]
      }
    ]
  }
}
```

**Example Response:**
```json
{
  "UserID": "user@example.com",
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000"
}
```

---

#### `SetStatus` - Update User Account Status

**Signature:**
```protobuf
rpc SetStatus (StatusMessage) returns (google.protobuf.Empty)
```

**Description:**
Updates the status of a user account within a specific organization context. This method is used to activate or deactivate user accounts. Status changes are logged in the audit trail and may trigger notifications or other side effects depending on the organization's configuration.

**Parameters:**
- **Request:** `StatusMessage`
  - `UserID` (string, required): The email address identifying the user whose status should be changed
  - `OrganizationID` (string, required): The organization context. Status changes are organization-specific
  - `Status` (UserStatus, required): The new status to set. Valid values:
    - `ACTIVE` (1): User account is active and can perform operations
    - `ADMIN_DEACTIVATED` (2): User account has been deactivated by an administrator
  - `Network` (optional metadata.Network): Network context for the status change
  - `Audit` (audit.Audit, required): Audit information including who made the change and when

**Returns:**
- **Response:** `google.protobuf.Empty`
  - Empty response indicating success. If the operation fails, an error is returned instead

**Behavior:**
- Status changes are scoped to the organization - a user can have different statuses in different organizations
- When a user is deactivated (`ADMIN_DEACTIVATED`):
  - The user cannot log in or perform operations in that organization
  - Existing sessions may be invalidated
  - Pending transactions may be blocked
  - Notifications may be sent to the user
- When a user is activated (`ACTIVE`):
  - The user regains access to the organization
  - The user can perform normal operations
  - Notifications may be sent to the user
- The status change is immediately effective
- All status changes are recorded in the audit trail
- The operation is idempotent - setting the same status multiple times has no additional effect

**Use Cases:**
- Admin deactivating a user account due to policy violations
- Reactivating a previously deactivated account
- Temporarily disabling user access for security reasons
- Bulk status updates for multiple users
- Compliance-related account suspensions

**Error Conditions:**
- User not found in the specified organization (NOT_FOUND)
- Invalid `UserID` format (INVALID_ARGUMENT)
- Invalid `OrganizationID` format (INVALID_ARGUMENT)
- Invalid `Status` value (INVALID_ARGUMENT)
- Missing or invalid audit information (INVALID_ARGUMENT)
- Permission/authorization errors (e.g., non-admin trying to change status) (PERMISSION_DENIED)

**Example Request:**
```json
{
  "UserID": "user@example.com",
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
  "Status": "ADMIN_DEACTIVATED",
  "Network": "MAINNET",
  "Audit": {
    "CreatedBy": "admin@example.com",
    "CreatedAt": "2024-11-10T15:30:00Z",
    "UpdatedBy": "admin@example.com",
    "UpdatedAt": "2024-11-10T15:30:00Z"
  }
}
```

**Example Response:**
```json
{}
```

---

## adminuser-grpc.proto

**Package:** `user`  
**Go Package:** `github.com/sologenic/com-fs-user-model;user`

### Overview

Defines the gRPC service interface for administrative user operations. This service extends the `UserService` with additional admin-only functionality, including audit trail queries and update operations with different permissions.

### Service: AdminUserService

The `AdminUserService` provides administrative endpoints for user management. It includes all operations from `UserService` plus additional admin-specific functionality.

**Key Differences from UserService:**
- `Update` method instead of `Upsert` (may have different validation/permission rules)
- `ListAudit` method for querying audit trails
- Typically requires admin-level permissions for all operations
- May bypass certain restrictions that apply to regular users

**Authentication & Authorization:**
- All methods require admin-level authentication
- Organization context is validated against admin permissions
- May have access to additional user data not available to regular users

### RPC Methods

#### `Get` - Retrieve a Single User (Admin)

**Signature:**
```protobuf
rpc Get (UserID) returns (User)
```

**Description:**
Same as `UserService.Get` but with admin privileges. May return additional information or have access to users across organizations depending on admin permissions.

**Parameters:**
- Same as `UserService.Get`

**Returns:**
- Same as `UserService.Get`

**Behavior:**
- Same as `UserService.Get` but with admin-level access
- May have access to additional audit information
- May be able to retrieve users from organizations the admin has access to

**Use Cases:**
- Admin viewing user details for support
- Cross-organization user lookup (if admin has multi-org access)
- Administrative user management

---

#### `List` - Retrieve Multiple Users with Filtering (Admin)

**Signature:**
```protobuf
rpc List (Filter) returns (UserList)
```

**Description:**
Same as `UserService.List` but with admin privileges. May have access to additional filter options or cross-organization queries.

**Parameters:**
- Same as `UserService.List`

**Returns:**
- Same as `UserService.List`

**Behavior:**
- Same as `UserService.List` but with admin-level access
- May support additional filter options
- May allow cross-organization queries for super admins

**Use Cases:**
- Admin dashboard user listing
- Cross-organization user queries
- Administrative reporting

---

#### `Update` - Update a User (Admin)

**Signature:**
```protobuf
rpc Update (User) returns (UserID)
```

**Description:**
Updates an existing user. Unlike `Upsert` in `UserService`, this method is specifically for updates and may have different validation rules or permission requirements. This method may allow admins to update fields that regular users cannot modify.

**Parameters:**
- **Request:** `User`
  - Same structure as `UserService.Upsert`
  - User must already exist (will not create new users)

**Returns:**
- **Response:** `UserID`
  - Same as `UserService.Upsert`

**Behavior:**
- Updates an existing user - will return an error if the user does not exist
- May allow updating fields that are restricted in `Upsert`
- May bypass certain validation rules
- Admin-level audit information is recorded
- May support bulk updates or special admin-only fields

**Use Cases:**
- Admin updating user information
- Correcting user data errors
- Administrative user modifications
- Bulk user updates

**Error Conditions:**
- User not found (NOT_FOUND)
- Invalid parameters (INVALID_ARGUMENT)
- Permission errors (PERMISSION_DENIED)

---

#### `SetStatus` - Update User Account Status (Admin)

**Signature:**
```protobuf
rpc SetStatus (StatusMessage) returns (google.protobuf.Empty)
```

**Description:**
Same as `UserService.SetStatus` but with admin privileges. This is the primary method for admins to activate or deactivate user accounts.

**Parameters:**
- Same as `UserService.SetStatus`

**Returns:**
- Same as `UserService.SetStatus`

**Behavior:**
- Same as `UserService.SetStatus` but with admin-level permissions
- May support additional status values or transitions
- May trigger additional admin notifications

**Use Cases:**
- Admin account management
- Compliance-related account actions
- Security-related account suspensions

---

#### `ListAudit` - Query Audit Trail

**Signature:**
```protobuf
rpc ListAudit (AuditFilter) returns (UserList)
```

**Description:**
Queries the audit trail to find users based on audit information. This admin-only method allows searching for users by who changed them, when they were changed, and other audit criteria. Useful for compliance, security investigations, and tracking administrative actions.

**Parameters:**
- **Request:** `AuditFilter`
  - `UserID` (optional string): Filter by specific user ID. Returns audit history for a single user.
  - `ChangedBy` (optional string): Filter by who made the changes. Returns users that were modified by a specific admin or user. Useful for tracking actions by a specific administrator.
  - `Network` (optional metadata.Network): Filter by network context. Returns users changed in a specific network context.
  - `OrganizationID` (optional string): Filter by organization. Returns users changed within a specific organization. If not provided, may search across all organizations (depending on admin permissions).
  - `Limit` (optional int32): Maximum number of results to return. Used for pagination.
  - `Offset` (optional int32): Pagination offset. Number of results to skip.

**Returns:**
- **Response:** `UserList`
  - `Users` (repeated User): Array of user entities matching the audit filter criteria. Each user includes complete information including audit details.
  - `Offset` (optional int32): The offset value used for this query.

**Behavior:**
- Searches audit trail records to find matching users
- Results are ordered by most recent changes first (typically)
- Multiple filter criteria are combined with AND logic
- Returns users that have audit records matching the criteria
- May return users that have been modified multiple times (one entry per modification, depending on implementation)
- Pagination is handled via `Offset` and `Limit` parameters

**Use Cases:**
- Compliance audits - finding all users modified by a specific admin
- Security investigations - tracking suspicious account changes
- Administrative reporting - reviewing recent user modifications
- Change tracking - finding users changed within a time period (if timestamp filtering is supported)
- Accountability - tracking administrative actions

**Error Conditions:**
- Invalid filter parameters (INVALID_ARGUMENT)
- Insufficient permissions (PERMISSION_DENIED)
- Invalid `OrganizationID` format (INVALID_ARGUMENT)

**Performance Considerations:**
- Audit queries may be slower than regular user queries
- Use appropriate `Limit` values to avoid timeouts
- Queries without `UserID` or `ChangedBy` may be particularly slow on large datasets
- Consider caching results for frequently accessed audit queries

**Example Request:**
```json
{
  "ChangedBy": "admin@example.com",
  "OrganizationID": "123e4567-e89b-12d3-a456-426614174000",
  "Limit": 100,
  "Offset": 0
}
```

**Example Response:**
```json
{
  "Users": [
    {
      "User": {...},
      "MetaData": {...},
      "Audit": {
        "CreatedBy": "admin@example.com",
        "UpdatedBy": "admin@example.com",
        ...
      },
      "OrganizationIDs": [...]
    },
    ...
  ],
  "Offset": 0
}
```

### Messages

#### AuditFilter

Filter message for querying audit trails. Used by the `ListAudit` RPC method.

**Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `UserID` | `optional string` | No | Filter by specific user ID. Returns audit history for a single user. |
| `ChangedBy` | `optional string` | No | Filter by who made the changes. Returns users that were modified by a specific admin or user identifier. |
| `Network` | `optional metadata.Network` | No | Filter by network context. Returns users changed in a specific network context. |
| `OrganizationID` | `optional string` | No | Filter by organization. Returns users changed within a specific organization. |
| `Limit` | `optional int32` | No | Maximum number of results to return. Used for pagination. |
| `Offset` | `optional int32` | No | Pagination offset. Number of results to skip. |

**Use Cases:**
- Audit trail queries
- Compliance reporting
- Security investigations
- Administrative accountability

---

## Additional Notes

### Multi-Organization Architecture

The user model is designed for multi-organizational use where:

1. **User Cloning**: Users can be "cloned" into multiple organizations, creating organization-specific instances
2. **Organization-Scoped Data**: Most user data is scoped to a specific organization
3. **Shared Identifiers**: The `UserID` (email) remains constant across organizations
4. **Independent Status**: User status can differ between organizations
5. **Selective Cloning**: Not all user data is cloned - some fields are organization-specific (e.g., broker accounts, bank accounts)

### Data Security

- **Sensitive Fields**: Fields like SSN, account numbers, and identification numbers should be encrypted at rest
- **Access Control**: All operations require proper authentication and authorization
- **Audit Trail**: All changes are logged in the audit trail
- **Compliance**: The model supports regulatory compliance requirements (KYC, AML, etc.)

### Integration Points

The user model integrates with several external models:

- **Trade Profile Model**: Trading preferences and broker account management
- **Document Model**: Document compliance and signed agreements
- **Role Model**: User roles and permissions
- **Language Model**: Localization support
- **Metadata Model**: Network and versioning information
- **Audit Model**: Change tracking and audit trails
- **Commission Model**: Commission settings and overrides

### Best Practices

1. **Always specify OrganizationID**: Most operations require an organization context
2. **Use pagination**: When listing users, always use appropriate `Limit` and `Offset` values
3. **Validate inputs**: Validate email addresses, UUIDs, and other structured data before sending requests
4. **Handle errors gracefully**: Handle error responses appropriately, especially for NOT_FOUND and PERMISSION_DENIED
5. **Respect audit trails**: Don't modify audit information manually - let the service handle it
6. **Encrypt sensitive data**: Ensure sensitive fields are encrypted before storage
7. **Use appropriate services**: Use `UserService` for regular operations and `AdminUserService` only for administrative tasks

---

## Version History

This documentation corresponds to the current version of the user model. For version-specific changes, refer to the git history and release notes.

---

## Support

For questions or issues related to the user model:
- Review the main README.md for setup and usage instructions
- Check the proto file comments for field-specific documentation
- Consult the integration examples in the `/client` directory

