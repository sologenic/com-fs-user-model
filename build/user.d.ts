import _m0 from "protobufjs/minimal";
import { UserDocumentCompliance } from "./sologenic/com-fs-document-model/document";
import { TradeProfileDetails, UserTradeProfile } from "./sologenic/com-fs-trade-profile-model/tradeprofile";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { CommissionSettings } from "./sologenic/com-fs-utils-lib/models/commission/commission";
import { Lang } from "./sologenic/com-fs-utils-lib/models/language/language";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Role } from "./sologenic/com-fs-utils-lib/models/role/role";
import { ComplianceQuestions } from "./user-compliance";
import { BankAccount, BrokerAccount, Wallet } from "./user-fundings";
import { Employment, KYCStatus, UserKYCDetails } from "./user-kyc";
export declare const protobufPackage = "user";
export declare enum UserStatus {
    NOT_USED_USERSTATUS = 0,
    ACTIVE = 1,
    ADMIN_DEACTIVATED = 2,
    TO_BE_APPROVED = 3,
    UNRECOGNIZED = -1
}
export declare function userStatusFromJSON(object: any): UserStatus;
export declare function userStatusToJSON(object: UserStatus): string;
export declare enum SocialType {
    NOT_USED_SOCIALTYPE = 0,
    WEBSITE = 1,
    GITHUB = 2,
    REDDIT = 3,
    DISCORD = 4,
    TWITTER = 5,
    FACEBOOK = 6,
    TELEGRAM = 7,
    INSTAGRAM = 8,
    LINKEDIN = 9,
    UNRECOGNIZED = -1
}
export declare function socialTypeFromJSON(object: any): SocialType;
export declare function socialTypeToJSON(object: SocialType): string;
export declare enum Theme {
    NOT_USED_THEME = 0,
    DARK = 1,
    LIGHT = 2,
    UNRECOGNIZED = -1
}
export declare function themeFromJSON(object: any): Theme;
export declare function themeToJSON(object: Theme): string;
export interface UserDetails {
    /** Firebase Auth UID */
    UserID: string;
    FirstName: string;
    LastName: string;
    Address: string;
    Avatar: string;
    /** "Nickname" */
    Alias: string;
    Description: string;
    Status: UserStatus;
    Wallets: Wallet[];
    Socials: Social[];
    Language: Lang;
    /** UUID for the external user identifier for example to be used in communication with the KYC provider, or other places where an anonymous ID is required */
    ExternalUserID: string;
    /** UUID of the current organization the user is cloned into */
    OrganizationID: string;
    Employment?: Employment | undefined;
    /** A retail user will always have a role of "NORMAL_USER" */
    Role: Role;
    /** Trade profile details */
    TradeProfile?: TradeProfileDetails | undefined;
    /** Array of KYC integration IDs */
    KYCInquiries: string[];
    KYCDetails: UserKYCDetails | undefined;
    UserDocumentCompliance: UserDocumentCompliance | undefined;
    /** Status of KYC verification, e.g., PENDING, APPROVED, REJECTED */
    KYCStatus: KYCStatus;
    UserTradeProfile?: UserTradeProfile | undefined;
    ComplianceQuestions: ComplianceQuestions[];
    BrokerAccounts: BrokerAccount[];
    BankAccounts: BankAccount[];
    UISettings: UISettings | undefined;
    /** Broker API specific commission fields for user level (overrrides organization level) */
    CommissionSettings?: CommissionSettings | undefined;
    DataFeedAccounts?: DataFeedAccounts | undefined;
    /** ISO 3166-1 alpha-3 code e.g. "USA", "CAD" */
    AllowedJurisdictions: string[];
    /** Email address for the user, often retrieved from the authentication provider */
    EmailAddress: string;
}
export interface User {
    User: UserDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
    /** List of organizations where the user is part of (cloned into) */
    OrganizationIDs: string[];
}
export interface Social {
    URL: string;
    Type: SocialType;
}
export interface UserList {
    Users: User[];
    Offset?: number | undefined;
}
export interface StatusMessage {
    UserID: string;
    OrganizationID: string;
    Status: UserStatus;
    Network?: Network | undefined;
    Audit: Audit | undefined;
}
export interface UISettings {
    Theme: Theme;
}
export interface DataFeedAccounts {
    DxFeed?: DxFeed | undefined;
}
export interface DxFeed {
    AccountID: string;
}
export declare const UserDetails: {
    encode(message: UserDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserDetails;
    fromJSON(object: any): UserDetails;
    toJSON(message: UserDetails): unknown;
    create<I extends {
        UserID?: string | undefined;
        FirstName?: string | undefined;
        LastName?: string | undefined;
        Address?: string | undefined;
        Avatar?: string | undefined;
        Alias?: string | undefined;
        Description?: string | undefined;
        Status?: UserStatus | undefined;
        Wallets?: {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[] | undefined;
        Socials?: {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] | undefined;
        Language?: Lang | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } | undefined;
            Contact?: {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } | undefined;
        Role?: Role | undefined;
        TradeProfile?: {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } | undefined;
        KYCInquiries?: string[] | undefined;
        KYCDetails?: {
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } | undefined;
        UserDocumentCompliance?: {
            SignedDocuments?: {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] | undefined;
        } | undefined;
        KYCStatus?: KYCStatus | undefined;
        UserTradeProfile?: {
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } | undefined;
        ComplianceQuestions?: {
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[] | undefined;
        BrokerAccounts?: {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[] | undefined;
        BankAccounts?: {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[] | undefined;
        UISettings?: {
            Theme?: Theme | undefined;
        } | undefined;
        CommissionSettings?: {
            Commission?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } | undefined;
        DataFeedAccounts?: {
            DxFeed?: {
                AccountID?: string | undefined;
            } | undefined;
        } | undefined;
        AllowedJurisdictions?: string[] | undefined;
        EmailAddress?: string | undefined;
    } & {
        UserID?: string | undefined;
        FirstName?: string | undefined;
        LastName?: string | undefined;
        Address?: string | undefined;
        Avatar?: string | undefined;
        Alias?: string | undefined;
        Description?: string | undefined;
        Status?: UserStatus | undefined;
        Wallets?: ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[] & ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        } & {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: (string[] & string[] & { [K in Exclude<keyof I["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["Wallets"][number], keyof Wallet>]: never; })[] & { [K_2 in Exclude<keyof I["Wallets"], keyof {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[]>]: never; }) | undefined;
        Socials?: ({
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] & ({
            URL?: string | undefined;
            Type?: SocialType | undefined;
        } & {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        } & { [K_3 in Exclude<keyof I["Socials"][number], keyof Social>]: never; })[] & { [K_4 in Exclude<keyof I["Socials"], keyof {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[]>]: never; }) | undefined;
        Language?: Lang | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: ({
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } | undefined;
            Contact?: {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: ({
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } & {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } & { [K_5 in Exclude<keyof I["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
            Contact?: ({
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } & {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } & { [K_6 in Exclude<keyof I["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & { [K_7 in Exclude<keyof I["Employment"], keyof Employment>]: never; }) | undefined;
        Role?: Role | undefined;
        TradeProfile?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_8 in Exclude<keyof I["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            SingleOrderLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            MaxOrderQuantity?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_10 in Exclude<keyof I["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & { [K_11 in Exclude<keyof I["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
        KYCInquiries?: (string[] & string[] & { [K_12 in Exclude<keyof I["KYCInquiries"], keyof string[]>]: never; }) | undefined;
        KYCDetails?: ({
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } & {
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } & { [K_13 in Exclude<keyof I["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
        UserDocumentCompliance?: ({
            SignedDocuments?: {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] | undefined;
        } & {
            SignedDocuments?: ({
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            } & {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            } & { [K_14 in Exclude<keyof I["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_15 in Exclude<keyof I["UserDocumentCompliance"]["SignedDocuments"], keyof {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
        KYCStatus?: KYCStatus | undefined;
        UserTradeProfile?: ({
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } & {
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } & { [K_17 in Exclude<keyof I["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
        ComplianceQuestions?: ({
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[] & ({
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        } & {
            USA?: ({
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } & {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } & { [K_18 in Exclude<keyof I["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
            AlpacaDisclosures?: ({
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } & {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_19 in Exclude<keyof I["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_22 in Exclude<keyof I["ComplianceQuestions"], keyof {
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        BrokerAccounts?: ({
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        } & {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: (string[] & string[] & { [K_23 in Exclude<keyof I["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
        } & { [K_24 in Exclude<keyof I["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_25 in Exclude<keyof I["BrokerAccounts"], keyof {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[]>]: never; }) | undefined;
        BankAccounts?: ({
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[] & ({
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        } & {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        } & { [K_26 in Exclude<keyof I["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_27 in Exclude<keyof I["BankAccounts"], keyof {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[]>]: never; }) | undefined;
        UISettings?: ({
            Theme?: Theme | undefined;
        } & {
            Theme?: Theme | undefined;
        } & { [K_28 in Exclude<keyof I["UISettings"], "Theme">]: never; }) | undefined;
        CommissionSettings?: ({
            Commission?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } & {
            Commission?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_29 in Exclude<keyof I["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } & { [K_30 in Exclude<keyof I["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
        DataFeedAccounts?: ({
            DxFeed?: {
                AccountID?: string | undefined;
            } | undefined;
        } & {
            DxFeed?: ({
                AccountID?: string | undefined;
            } & {
                AccountID?: string | undefined;
            } & { [K_31 in Exclude<keyof I["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
        } & { [K_32 in Exclude<keyof I["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
        AllowedJurisdictions?: (string[] & string[] & { [K_33 in Exclude<keyof I["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
        EmailAddress?: string | undefined;
    } & { [K_34 in Exclude<keyof I, keyof UserDetails>]: never; }>(base?: I | undefined): UserDetails;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        FirstName?: string | undefined;
        LastName?: string | undefined;
        Address?: string | undefined;
        Avatar?: string | undefined;
        Alias?: string | undefined;
        Description?: string | undefined;
        Status?: UserStatus | undefined;
        Wallets?: {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[] | undefined;
        Socials?: {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] | undefined;
        Language?: Lang | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } | undefined;
            Contact?: {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } | undefined;
        Role?: Role | undefined;
        TradeProfile?: {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } | undefined;
        KYCInquiries?: string[] | undefined;
        KYCDetails?: {
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } | undefined;
        UserDocumentCompliance?: {
            SignedDocuments?: {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] | undefined;
        } | undefined;
        KYCStatus?: KYCStatus | undefined;
        UserTradeProfile?: {
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } | undefined;
        ComplianceQuestions?: {
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[] | undefined;
        BrokerAccounts?: {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[] | undefined;
        BankAccounts?: {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[] | undefined;
        UISettings?: {
            Theme?: Theme | undefined;
        } | undefined;
        CommissionSettings?: {
            Commission?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } | undefined;
        DataFeedAccounts?: {
            DxFeed?: {
                AccountID?: string | undefined;
            } | undefined;
        } | undefined;
        AllowedJurisdictions?: string[] | undefined;
        EmailAddress?: string | undefined;
    } & {
        UserID?: string | undefined;
        FirstName?: string | undefined;
        LastName?: string | undefined;
        Address?: string | undefined;
        Avatar?: string | undefined;
        Alias?: string | undefined;
        Description?: string | undefined;
        Status?: UserStatus | undefined;
        Wallets?: ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[] & ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        } & {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: (string[] & string[] & { [K_35 in Exclude<keyof I_1["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["Wallets"][number], keyof Wallet>]: never; })[] & { [K_37 in Exclude<keyof I_1["Wallets"], keyof {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: import("./user-fundings").WalletType | undefined;
            SignerType?: import("./user-fundings").SignerType | undefined;
            Organizations?: string[] | undefined;
        }[]>]: never; }) | undefined;
        Socials?: ({
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] & ({
            URL?: string | undefined;
            Type?: SocialType | undefined;
        } & {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        } & { [K_38 in Exclude<keyof I_1["Socials"][number], keyof Social>]: never; })[] & { [K_39 in Exclude<keyof I_1["Socials"], keyof {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[]>]: never; }) | undefined;
        Language?: Lang | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: ({
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } | undefined;
            Contact?: {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: import("./user-kyc").EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: ({
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } & {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: import("./user-kyc").IncomeFrequency | undefined;
            } & { [K_40 in Exclude<keyof I_1["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
            Contact?: ({
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } & {
                Name?: string | undefined;
                Email?: string | undefined;
                Phone?: string | undefined;
                Address?: string | undefined;
            } & { [K_41 in Exclude<keyof I_1["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & { [K_42 in Exclude<keyof I_1["Employment"], keyof Employment>]: never; }) | undefined;
        Role?: Role | undefined;
        TradeProfile?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_43 in Exclude<keyof I_1["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            SingleOrderLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_44 in Exclude<keyof I_1["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            MaxOrderQuantity?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_45 in Exclude<keyof I_1["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & { [K_46 in Exclude<keyof I_1["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
        KYCInquiries?: (string[] & string[] & { [K_47 in Exclude<keyof I_1["KYCInquiries"], keyof string[]>]: never; }) | undefined;
        KYCDetails?: ({
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } & {
            Birthdate?: string | undefined;
            PhoneNumber?: string | undefined;
            EmailAddress?: string | undefined;
            AddressStreet1?: string | undefined;
            AddressStreet2?: string | undefined;
            AddressCity?: string | undefined;
            AddressSubdivision?: string | undefined;
            AddressPostalCode?: string | undefined;
            CountryCode?: string | undefined;
            SocialSecurityNumber?: string | undefined;
            IdentificationNumber?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
        } & { [K_48 in Exclude<keyof I_1["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
        UserDocumentCompliance?: ({
            SignedDocuments?: {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] | undefined;
        } & {
            SignedDocuments?: ({
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[] & ({
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            } & {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            } & { [K_49 in Exclude<keyof I_1["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_50 in Exclude<keyof I_1["UserDocumentCompliance"]["SignedDocuments"], keyof {
                Name?: string | undefined;
                SignedVersion?: string | undefined;
                DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                SignedAt?: Date | undefined;
                FileMD5SUM?: string | undefined;
                TXID?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_51 in Exclude<keyof I_1["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
        KYCStatus?: KYCStatus | undefined;
        UserTradeProfile?: ({
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } & {
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            SingleOrderLimit?: number | undefined;
            MaxOrderQuantity?: number | undefined;
        } & { [K_52 in Exclude<keyof I_1["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
        ComplianceQuestions?: ({
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[] & ({
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        } & {
            USA?: ({
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } & {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } & { [K_53 in Exclude<keyof I_1["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
            AlpacaDisclosures?: ({
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } & {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_54 in Exclude<keyof I_1["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I_1["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_57 in Exclude<keyof I_1["ComplianceQuestions"], keyof {
            USA?: {
                RecordedAt?: Date | undefined;
                YearsExperience?: number | undefined;
                AnnualIncome?: number | undefined;
                NetWorth?: number | undefined;
                ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                Objective?: import("./user-compliance").InvestmentObjective | undefined;
            } | undefined;
            AlpacaDisclosures?: {
                RecordedAt?: Date | undefined;
                IsControlPerson?: boolean | undefined;
                IsAffiliatedExchangeOrFinra?: boolean | undefined;
                IsPoliticallyExposed?: boolean | undefined;
                ImmediateFamilyExposed?: boolean | undefined;
                FundingSources?: import("./user-compliance").FundingSource[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        BrokerAccounts?: ({
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        } & {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: (string[] & string[] & { [K_58 in Exclude<keyof I_1["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
        } & { [K_59 in Exclude<keyof I_1["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_60 in Exclude<keyof I_1["BrokerAccounts"], keyof {
            AccountID?: string | undefined;
            Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
            OrganizationID?: string | undefined;
            Profiles?: string[] | undefined;
        }[]>]: never; }) | undefined;
        BankAccounts?: ({
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[] & ({
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        } & {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        } & { [K_61 in Exclude<keyof I_1["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_62 in Exclude<keyof I_1["BankAccounts"], keyof {
            AccountName?: string | undefined;
            BankName?: string | undefined;
            BankAddress?: string | undefined;
            AccountNumber?: string | undefined;
            ABA?: string | undefined;
            SWIFT?: string | undefined;
            IBAN?: string | undefined;
        }[]>]: never; }) | undefined;
        UISettings?: ({
            Theme?: Theme | undefined;
        } & {
            Theme?: Theme | undefined;
        } & { [K_63 in Exclude<keyof I_1["UISettings"], "Theme">]: never; }) | undefined;
        CommissionSettings?: ({
            Commission?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } & {
            Commission?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_64 in Exclude<keyof I_1["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
        } & { [K_65 in Exclude<keyof I_1["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
        DataFeedAccounts?: ({
            DxFeed?: {
                AccountID?: string | undefined;
            } | undefined;
        } & {
            DxFeed?: ({
                AccountID?: string | undefined;
            } & {
                AccountID?: string | undefined;
            } & { [K_66 in Exclude<keyof I_1["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
        } & { [K_67 in Exclude<keyof I_1["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
        AllowedJurisdictions?: (string[] & string[] & { [K_68 in Exclude<keyof I_1["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
        EmailAddress?: string | undefined;
    } & { [K_69 in Exclude<keyof I_1, keyof UserDetails>]: never; }>(object: I_1): UserDetails;
};
export declare const User: {
    encode(message: User, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): User;
    fromJSON(object: any): User;
    toJSON(message: User): unknown;
    create<I extends {
        User?: {
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } | undefined;
            Role?: Role | undefined;
            TradeProfile?: {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } | undefined;
            KYCInquiries?: string[] | undefined;
            KYCDetails?: {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } | undefined;
            UserDocumentCompliance?: {
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } | undefined;
            ComplianceQuestions?: {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] | undefined;
            BrokerAccounts?: {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] | undefined;
            BankAccounts?: {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] | undefined;
            UISettings?: {
                Theme?: Theme | undefined;
            } | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
            DataFeedAccounts?: {
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } | undefined;
            AllowedJurisdictions?: string[] | undefined;
            EmailAddress?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
        OrganizationIDs?: string[] | undefined;
    } & {
        User?: ({
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } | undefined;
            Role?: Role | undefined;
            TradeProfile?: {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } | undefined;
            KYCInquiries?: string[] | undefined;
            KYCDetails?: {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } | undefined;
            UserDocumentCompliance?: {
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } | undefined;
            ComplianceQuestions?: {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] | undefined;
            BrokerAccounts?: {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] | undefined;
            BankAccounts?: {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] | undefined;
            UISettings?: {
                Theme?: Theme | undefined;
            } | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
            DataFeedAccounts?: {
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } | undefined;
            AllowedJurisdictions?: string[] | undefined;
            EmailAddress?: string | undefined;
        } & {
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] & ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            } & {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: (string[] & string[] & { [K in Exclude<keyof I["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_2 in Exclude<keyof I["User"]["Wallets"], keyof {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[]>]: never; }) | undefined;
            Socials?: ({
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] & ({
                URL?: string | undefined;
                Type?: SocialType | undefined;
            } & {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            } & { [K_3 in Exclude<keyof I["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_4 in Exclude<keyof I["User"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: ({
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: ({
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } & {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } & { [K_5 in Exclude<keyof I["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
                Contact?: ({
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } & { [K_6 in Exclude<keyof I["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & { [K_7 in Exclude<keyof I["User"]["Employment"], keyof Employment>]: never; }) | undefined;
            Role?: Role | undefined;
            TradeProfile?: ({
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } & {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_8 in Exclude<keyof I["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                SingleOrderLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_9 in Exclude<keyof I["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                MaxOrderQuantity?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_10 in Exclude<keyof I["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } & { [K_11 in Exclude<keyof I["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
            KYCInquiries?: (string[] & string[] & { [K_12 in Exclude<keyof I["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
            KYCDetails?: ({
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } & {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } & { [K_13 in Exclude<keyof I["User"]["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
            UserDocumentCompliance?: ({
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } & {
                SignedDocuments?: ({
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] & ({
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                } & {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                } & { [K_14 in Exclude<keyof I["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_15 in Exclude<keyof I["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: ({
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } & {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } & { [K_17 in Exclude<keyof I["User"]["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
            ComplianceQuestions?: ({
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] & ({
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            } & {
                USA?: ({
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } & {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } & { [K_18 in Exclude<keyof I["User"]["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
                AlpacaDisclosures?: ({
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } & {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_19 in Exclude<keyof I["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
            } & { [K_21 in Exclude<keyof I["User"]["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_22 in Exclude<keyof I["User"]["ComplianceQuestions"], keyof {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            BrokerAccounts?: ({
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] & ({
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            } & {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: (string[] & string[] & { [K_23 in Exclude<keyof I["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
            } & { [K_24 in Exclude<keyof I["User"]["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_25 in Exclude<keyof I["User"]["BrokerAccounts"], keyof {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[]>]: never; }) | undefined;
            BankAccounts?: ({
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] & ({
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            } & {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            } & { [K_26 in Exclude<keyof I["User"]["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_27 in Exclude<keyof I["User"]["BankAccounts"], keyof {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[]>]: never; }) | undefined;
            UISettings?: ({
                Theme?: Theme | undefined;
            } & {
                Theme?: Theme | undefined;
            } & { [K_28 in Exclude<keyof I["User"]["UISettings"], "Theme">]: never; }) | undefined;
            CommissionSettings?: ({
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & {
                Commission?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_29 in Exclude<keyof I["User"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & { [K_30 in Exclude<keyof I["User"]["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
            DataFeedAccounts?: ({
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } & {
                DxFeed?: ({
                    AccountID?: string | undefined;
                } & {
                    AccountID?: string | undefined;
                } & { [K_31 in Exclude<keyof I["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
            } & { [K_32 in Exclude<keyof I["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
            AllowedJurisdictions?: (string[] & string[] & { [K_33 in Exclude<keyof I["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
            EmailAddress?: string | undefined;
        } & { [K_34 in Exclude<keyof I["User"], keyof UserDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_35 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_36 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
        OrganizationIDs?: (string[] & string[] & { [K_37 in Exclude<keyof I["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
    } & { [K_38 in Exclude<keyof I, keyof User>]: never; }>(base?: I | undefined): User;
    fromPartial<I_1 extends {
        User?: {
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } | undefined;
            Role?: Role | undefined;
            TradeProfile?: {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } | undefined;
            KYCInquiries?: string[] | undefined;
            KYCDetails?: {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } | undefined;
            UserDocumentCompliance?: {
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } | undefined;
            ComplianceQuestions?: {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] | undefined;
            BrokerAccounts?: {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] | undefined;
            BankAccounts?: {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] | undefined;
            UISettings?: {
                Theme?: Theme | undefined;
            } | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
            DataFeedAccounts?: {
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } | undefined;
            AllowedJurisdictions?: string[] | undefined;
            EmailAddress?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
        OrganizationIDs?: string[] | undefined;
    } & {
        User?: ({
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } | undefined;
            Role?: Role | undefined;
            TradeProfile?: {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } | undefined;
            KYCInquiries?: string[] | undefined;
            KYCDetails?: {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } | undefined;
            UserDocumentCompliance?: {
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } | undefined;
            ComplianceQuestions?: {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] | undefined;
            BrokerAccounts?: {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] | undefined;
            BankAccounts?: {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] | undefined;
            UISettings?: {
                Theme?: Theme | undefined;
            } | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
            DataFeedAccounts?: {
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } | undefined;
            AllowedJurisdictions?: string[] | undefined;
            EmailAddress?: string | undefined;
        } & {
            UserID?: string | undefined;
            FirstName?: string | undefined;
            LastName?: string | undefined;
            Address?: string | undefined;
            Avatar?: string | undefined;
            Alias?: string | undefined;
            Description?: string | undefined;
            Status?: UserStatus | undefined;
            Wallets?: ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[] & ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            } & {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: (string[] & string[] & { [K_39 in Exclude<keyof I_1["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
            } & { [K_40 in Exclude<keyof I_1["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_41 in Exclude<keyof I_1["User"]["Wallets"], keyof {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: import("./user-fundings").WalletType | undefined;
                SignerType?: import("./user-fundings").SignerType | undefined;
                Organizations?: string[] | undefined;
            }[]>]: never; }) | undefined;
            Socials?: ({
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] & ({
                URL?: string | undefined;
                Type?: SocialType | undefined;
            } & {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            } & { [K_42 in Exclude<keyof I_1["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_43 in Exclude<keyof I_1["User"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: Lang | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: ({
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } | undefined;
                Contact?: {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: import("./user-kyc").EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: ({
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } & {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                } & { [K_44 in Exclude<keyof I_1["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
                Contact?: ({
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Email?: string | undefined;
                    Phone?: string | undefined;
                    Address?: string | undefined;
                } & { [K_45 in Exclude<keyof I_1["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & { [K_46 in Exclude<keyof I_1["User"]["Employment"], keyof Employment>]: never; }) | undefined;
            Role?: Role | undefined;
            TradeProfile?: ({
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                SingleOrderLimit?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                MaxOrderQuantity?: {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } & {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_47 in Exclude<keyof I_1["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                SingleOrderLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_48 in Exclude<keyof I_1["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                MaxOrderQuantity?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_49 in Exclude<keyof I_1["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
                RiskMultiplier?: number | undefined;
            } & { [K_50 in Exclude<keyof I_1["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
            KYCInquiries?: (string[] & string[] & { [K_51 in Exclude<keyof I_1["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
            KYCDetails?: ({
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } & {
                Birthdate?: string | undefined;
                PhoneNumber?: string | undefined;
                EmailAddress?: string | undefined;
                AddressStreet1?: string | undefined;
                AddressStreet2?: string | undefined;
                AddressCity?: string | undefined;
                AddressSubdivision?: string | undefined;
                AddressPostalCode?: string | undefined;
                CountryCode?: string | undefined;
                SocialSecurityNumber?: string | undefined;
                IdentificationNumber?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
            } & { [K_52 in Exclude<keyof I_1["User"]["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
            UserDocumentCompliance?: ({
                SignedDocuments?: {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] | undefined;
            } & {
                SignedDocuments?: ({
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[] & ({
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                } & {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                } & { [K_53 in Exclude<keyof I_1["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_54 in Exclude<keyof I_1["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                    Name?: string | undefined;
                    SignedVersion?: string | undefined;
                    DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                    SignedAt?: Date | undefined;
                    FileMD5SUM?: string | undefined;
                    TXID?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I_1["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
            KYCStatus?: KYCStatus | undefined;
            UserTradeProfile?: ({
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } & {
                IsMarginTradingEnabled?: boolean | undefined;
                IsShortSellingEnabled?: boolean | undefined;
                SingleOrderLimit?: number | undefined;
                MaxOrderQuantity?: number | undefined;
            } & { [K_56 in Exclude<keyof I_1["User"]["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
            ComplianceQuestions?: ({
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[] & ({
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            } & {
                USA?: ({
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } & {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } & { [K_57 in Exclude<keyof I_1["User"]["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
                AlpacaDisclosures?: ({
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } & {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_58 in Exclude<keyof I_1["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
                } & { [K_59 in Exclude<keyof I_1["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
            } & { [K_60 in Exclude<keyof I_1["User"]["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_61 in Exclude<keyof I_1["User"]["ComplianceQuestions"], keyof {
                USA?: {
                    RecordedAt?: Date | undefined;
                    YearsExperience?: number | undefined;
                    AnnualIncome?: number | undefined;
                    NetWorth?: number | undefined;
                    ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                    Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                    Objective?: import("./user-compliance").InvestmentObjective | undefined;
                } | undefined;
                AlpacaDisclosures?: {
                    RecordedAt?: Date | undefined;
                    IsControlPerson?: boolean | undefined;
                    IsAffiliatedExchangeOrFinra?: boolean | undefined;
                    IsPoliticallyExposed?: boolean | undefined;
                    ImmediateFamilyExposed?: boolean | undefined;
                    FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            BrokerAccounts?: ({
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[] & ({
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            } & {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: (string[] & string[] & { [K_62 in Exclude<keyof I_1["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
            } & { [K_63 in Exclude<keyof I_1["User"]["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_64 in Exclude<keyof I_1["User"]["BrokerAccounts"], keyof {
                AccountID?: string | undefined;
                Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                OrganizationID?: string | undefined;
                Profiles?: string[] | undefined;
            }[]>]: never; }) | undefined;
            BankAccounts?: ({
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[] & ({
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            } & {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            } & { [K_65 in Exclude<keyof I_1["User"]["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_66 in Exclude<keyof I_1["User"]["BankAccounts"], keyof {
                AccountName?: string | undefined;
                BankName?: string | undefined;
                BankAddress?: string | undefined;
                AccountNumber?: string | undefined;
                ABA?: string | undefined;
                SWIFT?: string | undefined;
                IBAN?: string | undefined;
            }[]>]: never; }) | undefined;
            UISettings?: ({
                Theme?: Theme | undefined;
            } & {
                Theme?: Theme | undefined;
            } & { [K_67 in Exclude<keyof I_1["User"]["UISettings"], "Theme">]: never; }) | undefined;
            CommissionSettings?: ({
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & {
                Commission?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_68 in Exclude<keyof I_1["User"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & { [K_69 in Exclude<keyof I_1["User"]["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
            DataFeedAccounts?: ({
                DxFeed?: {
                    AccountID?: string | undefined;
                } | undefined;
            } & {
                DxFeed?: ({
                    AccountID?: string | undefined;
                } & {
                    AccountID?: string | undefined;
                } & { [K_70 in Exclude<keyof I_1["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
            } & { [K_71 in Exclude<keyof I_1["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
            AllowedJurisdictions?: (string[] & string[] & { [K_72 in Exclude<keyof I_1["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
            EmailAddress?: string | undefined;
        } & { [K_73 in Exclude<keyof I_1["User"], keyof UserDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_74 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_75 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
        OrganizationIDs?: (string[] & string[] & { [K_76 in Exclude<keyof I_1["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
    } & { [K_77 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const Social: {
    encode(message: Social, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Social;
    fromJSON(object: any): Social;
    toJSON(message: Social): unknown;
    create<I extends {
        URL?: string | undefined;
        Type?: SocialType | undefined;
    } & {
        URL?: string | undefined;
        Type?: SocialType | undefined;
    } & { [K in Exclude<keyof I, keyof Social>]: never; }>(base?: I | undefined): Social;
    fromPartial<I_1 extends {
        URL?: string | undefined;
        Type?: SocialType | undefined;
    } & {
        URL?: string | undefined;
        Type?: SocialType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Social>]: never; }>(object: I_1): Social;
};
export declare const UserList: {
    encode(message: UserList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserList;
    fromJSON(object: any): UserList;
    toJSON(message: UserList): unknown;
    create<I extends {
        Users?: {
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Users?: ({
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[] & ({
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        } & {
            User?: ({
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } & {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] & ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                } & {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: (string[] & string[] & { [K in Exclude<keyof I["Users"][number]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["Users"][number]["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_2 in Exclude<keyof I["Users"][number]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] & ({
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                } & {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                } & { [K_3 in Exclude<keyof I["Users"][number]["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_4 in Exclude<keyof I["Users"][number]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: ({
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: ({
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } & {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } & { [K_5 in Exclude<keyof I["Users"][number]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
                    Contact?: ({
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } & { [K_6 in Exclude<keyof I["Users"][number]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_7 in Exclude<keyof I["Users"][number]["User"]["Employment"], keyof Employment>]: never; }) | undefined;
                Role?: Role | undefined;
                TradeProfile?: ({
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_8 in Exclude<keyof I["Users"][number]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    SingleOrderLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_9 in Exclude<keyof I["Users"][number]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    MaxOrderQuantity?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_10 in Exclude<keyof I["Users"][number]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & { [K_11 in Exclude<keyof I["Users"][number]["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
                KYCInquiries?: (string[] & string[] & { [K_12 in Exclude<keyof I["Users"][number]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
                KYCDetails?: ({
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } & {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } & { [K_13 in Exclude<keyof I["Users"][number]["User"]["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
                UserDocumentCompliance?: ({
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } & {
                    SignedDocuments?: ({
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] & ({
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    } & { [K_14 in Exclude<keyof I["Users"][number]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_15 in Exclude<keyof I["Users"][number]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["Users"][number]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: ({
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } & {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } & { [K_17 in Exclude<keyof I["Users"][number]["User"]["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
                ComplianceQuestions?: ({
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] & ({
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                } & {
                    USA?: ({
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } & {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } & { [K_18 in Exclude<keyof I["Users"][number]["User"]["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
                    AlpacaDisclosures?: ({
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } & {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_19 in Exclude<keyof I["Users"][number]["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
                    } & { [K_20 in Exclude<keyof I["Users"][number]["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
                } & { [K_21 in Exclude<keyof I["Users"][number]["User"]["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_22 in Exclude<keyof I["Users"][number]["User"]["ComplianceQuestions"], keyof {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                BrokerAccounts?: ({
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] & ({
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                } & {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: (string[] & string[] & { [K_23 in Exclude<keyof I["Users"][number]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                } & { [K_24 in Exclude<keyof I["Users"][number]["User"]["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_25 in Exclude<keyof I["Users"][number]["User"]["BrokerAccounts"], keyof {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[]>]: never; }) | undefined;
                BankAccounts?: ({
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] & ({
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                } & {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                } & { [K_26 in Exclude<keyof I["Users"][number]["User"]["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_27 in Exclude<keyof I["Users"][number]["User"]["BankAccounts"], keyof {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[]>]: never; }) | undefined;
                UISettings?: ({
                    Theme?: Theme | undefined;
                } & {
                    Theme?: Theme | undefined;
                } & { [K_28 in Exclude<keyof I["Users"][number]["User"]["UISettings"], "Theme">]: never; }) | undefined;
                CommissionSettings?: ({
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & {
                    Commission?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_29 in Exclude<keyof I["Users"][number]["User"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_30 in Exclude<keyof I["Users"][number]["User"]["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
                DataFeedAccounts?: ({
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } & {
                    DxFeed?: ({
                        AccountID?: string | undefined;
                    } & {
                        AccountID?: string | undefined;
                    } & { [K_31 in Exclude<keyof I["Users"][number]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                } & { [K_32 in Exclude<keyof I["Users"][number]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                AllowedJurisdictions?: (string[] & string[] & { [K_33 in Exclude<keyof I["Users"][number]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                EmailAddress?: string | undefined;
            } & { [K_34 in Exclude<keyof I["Users"][number]["User"], keyof UserDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_35 in Exclude<keyof I["Users"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_36 in Exclude<keyof I["Users"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            OrganizationIDs?: (string[] & string[] & { [K_37 in Exclude<keyof I["Users"][number]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
        } & { [K_38 in Exclude<keyof I["Users"][number], keyof User>]: never; })[] & { [K_39 in Exclude<keyof I["Users"], keyof {
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_40 in Exclude<keyof I, keyof UserList>]: never; }>(base?: I | undefined): UserList;
    fromPartial<I_1 extends {
        Users?: {
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Users?: ({
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[] & ({
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        } & {
            User?: ({
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } & {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] & ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                } & {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: (string[] & string[] & { [K_41 in Exclude<keyof I_1["Users"][number]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                } & { [K_42 in Exclude<keyof I_1["Users"][number]["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_43 in Exclude<keyof I_1["Users"][number]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] & ({
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                } & {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                } & { [K_44 in Exclude<keyof I_1["Users"][number]["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_45 in Exclude<keyof I_1["Users"][number]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: ({
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: ({
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } & {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } & { [K_46 in Exclude<keyof I_1["Users"][number]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
                    Contact?: ({
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } & { [K_47 in Exclude<keyof I_1["Users"][number]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_48 in Exclude<keyof I_1["Users"][number]["User"]["Employment"], keyof Employment>]: never; }) | undefined;
                Role?: Role | undefined;
                TradeProfile?: ({
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_49 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    SingleOrderLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_50 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    MaxOrderQuantity?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_51 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & { [K_52 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
                KYCInquiries?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["Users"][number]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
                KYCDetails?: ({
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } & {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } & { [K_54 in Exclude<keyof I_1["Users"][number]["User"]["KYCDetails"], keyof UserKYCDetails>]: never; }) | undefined;
                UserDocumentCompliance?: ({
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } & {
                    SignedDocuments?: ({
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] & ({
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    } & {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    } & { [K_55 in Exclude<keyof I_1["Users"][number]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_56 in Exclude<keyof I_1["Users"][number]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_57 in Exclude<keyof I_1["Users"][number]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: ({
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } & {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } & { [K_58 in Exclude<keyof I_1["Users"][number]["User"]["UserTradeProfile"], keyof UserTradeProfile>]: never; }) | undefined;
                ComplianceQuestions?: ({
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] & ({
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                } & {
                    USA?: ({
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } & {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } & { [K_59 in Exclude<keyof I_1["Users"][number]["User"]["ComplianceQuestions"][number]["USA"], keyof import("./user-compliance").USA>]: never; }) | undefined;
                    AlpacaDisclosures?: ({
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } & {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: (import("./user-compliance").FundingSource[] & import("./user-compliance").FundingSource[] & { [K_60 in Exclude<keyof I_1["Users"][number]["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"]["FundingSources"], keyof import("./user-compliance").FundingSource[]>]: never; }) | undefined;
                    } & { [K_61 in Exclude<keyof I_1["Users"][number]["User"]["ComplianceQuestions"][number]["AlpacaDisclosures"], keyof import("./user-compliance").AlpacaDisclosures>]: never; }) | undefined;
                } & { [K_62 in Exclude<keyof I_1["Users"][number]["User"]["ComplianceQuestions"][number], keyof ComplianceQuestions>]: never; })[] & { [K_63 in Exclude<keyof I_1["Users"][number]["User"]["ComplianceQuestions"], keyof {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                BrokerAccounts?: ({
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] & ({
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                } & {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: (string[] & string[] & { [K_64 in Exclude<keyof I_1["Users"][number]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                } & { [K_65 in Exclude<keyof I_1["Users"][number]["User"]["BrokerAccounts"][number], keyof BrokerAccount>]: never; })[] & { [K_66 in Exclude<keyof I_1["Users"][number]["User"]["BrokerAccounts"], keyof {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[]>]: never; }) | undefined;
                BankAccounts?: ({
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] & ({
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                } & {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                } & { [K_67 in Exclude<keyof I_1["Users"][number]["User"]["BankAccounts"][number], keyof BankAccount>]: never; })[] & { [K_68 in Exclude<keyof I_1["Users"][number]["User"]["BankAccounts"], keyof {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[]>]: never; }) | undefined;
                UISettings?: ({
                    Theme?: Theme | undefined;
                } & {
                    Theme?: Theme | undefined;
                } & { [K_69 in Exclude<keyof I_1["Users"][number]["User"]["UISettings"], "Theme">]: never; }) | undefined;
                CommissionSettings?: ({
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & {
                    Commission?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_70 in Exclude<keyof I_1["Users"][number]["User"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_71 in Exclude<keyof I_1["Users"][number]["User"]["CommissionSettings"], keyof CommissionSettings>]: never; }) | undefined;
                DataFeedAccounts?: ({
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } & {
                    DxFeed?: ({
                        AccountID?: string | undefined;
                    } & {
                        AccountID?: string | undefined;
                    } & { [K_72 in Exclude<keyof I_1["Users"][number]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                } & { [K_73 in Exclude<keyof I_1["Users"][number]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                AllowedJurisdictions?: (string[] & string[] & { [K_74 in Exclude<keyof I_1["Users"][number]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                EmailAddress?: string | undefined;
            } & { [K_75 in Exclude<keyof I_1["Users"][number]["User"], keyof UserDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_76 in Exclude<keyof I_1["Users"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_77 in Exclude<keyof I_1["Users"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            OrganizationIDs?: (string[] & string[] & { [K_78 in Exclude<keyof I_1["Users"][number]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
        } & { [K_79 in Exclude<keyof I_1["Users"][number], keyof User>]: never; })[] & { [K_80 in Exclude<keyof I_1["Users"], keyof {
            User?: {
                UserID?: string | undefined;
                FirstName?: string | undefined;
                LastName?: string | undefined;
                Address?: string | undefined;
                Avatar?: string | undefined;
                Alias?: string | undefined;
                Description?: string | undefined;
                Status?: UserStatus | undefined;
                Wallets?: {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: Lang | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: import("./user-kyc").EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: import("./user-kyc").IncomeFrequency | undefined;
                    } | undefined;
                    Contact?: {
                        Name?: string | undefined;
                        Email?: string | undefined;
                        Phone?: string | undefined;
                        Address?: string | undefined;
                    } | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } | undefined;
                Role?: Role | undefined;
                TradeProfile?: {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    SingleOrderLimit?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    MaxOrderQuantity?: {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } | undefined;
                KYCInquiries?: string[] | undefined;
                KYCDetails?: {
                    Birthdate?: string | undefined;
                    PhoneNumber?: string | undefined;
                    EmailAddress?: string | undefined;
                    AddressStreet1?: string | undefined;
                    AddressStreet2?: string | undefined;
                    AddressCity?: string | undefined;
                    AddressSubdivision?: string | undefined;
                    AddressPostalCode?: string | undefined;
                    CountryCode?: string | undefined;
                    SocialSecurityNumber?: string | undefined;
                    IdentificationNumber?: string | undefined;
                    FirstName?: string | undefined;
                    LastName?: string | undefined;
                } | undefined;
                UserDocumentCompliance?: {
                    SignedDocuments?: {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[] | undefined;
                } | undefined;
                KYCStatus?: KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
                ComplianceQuestions?: {
                    USA?: {
                        RecordedAt?: Date | undefined;
                        YearsExperience?: number | undefined;
                        AnnualIncome?: number | undefined;
                        NetWorth?: number | undefined;
                        ConversionImportance?: import("./user-compliance").LiquidationImportance | undefined;
                        Tolerance?: import("./user-compliance").RiskTolerance | undefined;
                        Objective?: import("./user-compliance").InvestmentObjective | undefined;
                    } | undefined;
                    AlpacaDisclosures?: {
                        RecordedAt?: Date | undefined;
                        IsControlPerson?: boolean | undefined;
                        IsAffiliatedExchangeOrFinra?: boolean | undefined;
                        IsPoliticallyExposed?: boolean | undefined;
                        ImmediateFamilyExposed?: boolean | undefined;
                        FundingSources?: import("./user-compliance").FundingSource[] | undefined;
                    } | undefined;
                }[] | undefined;
                BrokerAccounts?: {
                    AccountID?: string | undefined;
                    Broker?: import("./sologenic/com-fs-utils-lib/models/order-properties/order-properties").ClearingBroker | undefined;
                    OrganizationID?: string | undefined;
                    Profiles?: string[] | undefined;
                }[] | undefined;
                BankAccounts?: {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[] | undefined;
                UISettings?: {
                    Theme?: Theme | undefined;
                } | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
                DataFeedAccounts?: {
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } | undefined;
                AllowedJurisdictions?: string[] | undefined;
                EmailAddress?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            OrganizationIDs?: string[] | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_81 in Exclude<keyof I_1, keyof UserList>]: never; }>(object: I_1): UserList;
};
export declare const StatusMessage: {
    encode(message: StatusMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusMessage;
    fromJSON(object: any): StatusMessage;
    toJSON(message: StatusMessage): unknown;
    create<I extends {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof StatusMessage>]: never; }>(base?: I | undefined): StatusMessage;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof StatusMessage>]: never; }>(object: I_1): StatusMessage;
};
export declare const UISettings: {
    encode(message: UISettings, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UISettings;
    fromJSON(object: any): UISettings;
    toJSON(message: UISettings): unknown;
    create<I extends {
        Theme?: Theme | undefined;
    } & {
        Theme?: Theme | undefined;
    } & { [K in Exclude<keyof I, "Theme">]: never; }>(base?: I | undefined): UISettings;
    fromPartial<I_1 extends {
        Theme?: Theme | undefined;
    } & {
        Theme?: Theme | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Theme">]: never; }>(object: I_1): UISettings;
};
export declare const DataFeedAccounts: {
    encode(message: DataFeedAccounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataFeedAccounts;
    fromJSON(object: any): DataFeedAccounts;
    toJSON(message: DataFeedAccounts): unknown;
    create<I extends {
        DxFeed?: {
            AccountID?: string | undefined;
        } | undefined;
    } & {
        DxFeed?: ({
            AccountID?: string | undefined;
        } & {
            AccountID?: string | undefined;
        } & { [K in Exclude<keyof I["DxFeed"], "AccountID">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "DxFeed">]: never; }>(base?: I | undefined): DataFeedAccounts;
    fromPartial<I_1 extends {
        DxFeed?: {
            AccountID?: string | undefined;
        } | undefined;
    } & {
        DxFeed?: ({
            AccountID?: string | undefined;
        } & {
            AccountID?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["DxFeed"], "AccountID">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, "DxFeed">]: never; }>(object: I_1): DataFeedAccounts;
};
export declare const DxFeed: {
    encode(message: DxFeed, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DxFeed;
    fromJSON(object: any): DxFeed;
    toJSON(message: DxFeed): unknown;
    create<I extends {
        AccountID?: string | undefined;
    } & {
        AccountID?: string | undefined;
    } & { [K in Exclude<keyof I, "AccountID">]: never; }>(base?: I | undefined): DxFeed;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
    } & {
        AccountID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "AccountID">]: never; }>(object: I_1): DxFeed;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
