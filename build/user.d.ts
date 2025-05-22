import _m0 from "protobufjs/minimal";
import { TradeProfileDetails } from "./sologenic/com-fs-trade-profile-model/tradeprofile";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { Language } from "./sologenic/com-fs-utils-lib/models/language/language";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Role } from "./sologenic/com-fs-utils-lib/models/role/role";
export declare const protobufPackage = "user";
export declare enum EmploymentType {
    NOT_USED_EMPLOYMENTTYPE = 0,
    FULL_TIME = 1,
    PART_TIME = 2,
    CONTRACT = 3,
    FREELANCE = 4,
    SELF_EMPLOYED = 5,
    INTERNSHIP = 6,
    UNRECOGNIZED = -1
}
export declare function employmentTypeFromJSON(object: any): EmploymentType;
export declare function employmentTypeToJSON(object: EmploymentType): string;
export declare enum IncomeFrequency {
    NOT_USED_INCOMEFREQUENCY = 0,
    HOURLY = 1,
    WEEKLY = 2,
    BI_WEEKLY = 3,
    MONTHLY = 4,
    ANNUALLY = 5,
    UNRECOGNIZED = -1
}
export declare function incomeFrequencyFromJSON(object: any): IncomeFrequency;
export declare function incomeFrequencyToJSON(object: IncomeFrequency): string;
export declare enum UserStatus {
    NOT_USED_USERSTATUS = 0,
    ACTIVE = 1,
    ADMIN_DEACTIVATED = 2,
    UNRECOGNIZED = -1
}
export declare function userStatusFromJSON(object: any): UserStatus;
export declare function userStatusToJSON(object: UserStatus): string;
export declare enum WalletType {
    NOT_USED_WALLETTYPE = 0,
    TFSA = 1,
    RRSP = 2,
    STANDARD = 3,
    UNRECOGNIZED = -1
}
export declare function walletTypeFromJSON(object: any): WalletType;
export declare function walletTypeToJSON(object: WalletType): string;
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
export interface UserDetails {
    /** email address used for firebase authentication */
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
    Language: Language | undefined;
    /** UUID for the external user identifier in the KYC provider */
    ExternalUserID: string;
    /** UUID */
    OrganizationID: string;
    Employment?: Employment | undefined;
    /** A retail user will always have a role of "NORMAL_USER" */
    Role: Role;
    /** Trade profile details */
    TradeProfile: TradeProfileDetails | undefined;
}
/** TODO: to be verified when more information is available */
export interface Employment {
    EmployerName: string;
    JobTitle: string;
    StartDate: Date | undefined;
    /** Empty if still employed */
    EndDate: Date | undefined;
    Type: EmploymentType;
    Industry?: string | undefined;
    Income: Income | undefined;
    Contact: EmployerContact | undefined;
    IsVerified: boolean;
    VerifiedAt: string;
}
export interface Income {
    Amount: number;
    Currency: string;
    Frequency: IncomeFrequency;
}
export interface EmployerContact {
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
}
export interface User {
    User: UserDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface UserID {
    UserID: string;
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface Social {
    URL: string;
    Type: SocialType;
}
export interface Wallet {
    Address: string;
    Alias: string;
    Type: WalletType;
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
            Type?: WalletType | undefined;
        }[] | undefined;
        Socials?: {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] | undefined;
        Language?: {
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
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
        } | undefined;
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
            Type?: WalletType | undefined;
        }[] & ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
        } & {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
        } & { [K in Exclude<keyof I["Wallets"][number], keyof Wallet>]: never; })[] & { [K_1 in Exclude<keyof I["Wallets"], keyof {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
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
        } & { [K_2 in Exclude<keyof I["Socials"][number], keyof Social>]: never; })[] & { [K_3 in Exclude<keyof I["Socials"], keyof {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[]>]: never; }) | undefined;
        Language?: ({
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } & {
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I["Language"], keyof Language>]: never; }) | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: ({
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
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
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: ({
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
            } & {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
            } & { [K_5 in Exclude<keyof I["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
            } & { [K_6 in Exclude<keyof I["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & { [K_7 in Exclude<keyof I["Employment"], keyof Employment>]: never; }) | undefined;
        Role?: Role | undefined;
        TradeProfile?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
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
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
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
        } & { [K_11 in Exclude<keyof I["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof UserDetails>]: never; }>(base?: I | undefined): UserDetails;
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
            Type?: WalletType | undefined;
        }[] | undefined;
        Socials?: {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[] | undefined;
        Language?: {
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: {
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
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
        } | undefined;
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
            Type?: WalletType | undefined;
        }[] & ({
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
        } & {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
        } & { [K_13 in Exclude<keyof I_1["Wallets"][number], keyof Wallet>]: never; })[] & { [K_14 in Exclude<keyof I_1["Wallets"], keyof {
            Address?: string | undefined;
            Alias?: string | undefined;
            Type?: WalletType | undefined;
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
        } & { [K_15 in Exclude<keyof I_1["Socials"][number], keyof Social>]: never; })[] & { [K_16 in Exclude<keyof I_1["Socials"], keyof {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[]>]: never; }) | undefined;
        Language?: ({
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } & {
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
        } & { [K_17 in Exclude<keyof I_1["Language"], keyof Language>]: never; }) | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
        Employment?: ({
            EmployerName?: string | undefined;
            JobTitle?: string | undefined;
            StartDate?: Date | undefined;
            EndDate?: Date | undefined;
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
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
            Type?: EmploymentType | undefined;
            Industry?: string | undefined;
            Income?: ({
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
            } & {
                Amount?: number | undefined;
                Currency?: string | undefined;
                Frequency?: IncomeFrequency | undefined;
            } & { [K_18 in Exclude<keyof I_1["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
            } & { [K_19 in Exclude<keyof I_1["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
            IsVerified?: boolean | undefined;
            VerifiedAt?: string | undefined;
        } & { [K_20 in Exclude<keyof I_1["Employment"], keyof Employment>]: never; }) | undefined;
        Role?: Role | undefined;
        TradeProfile?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
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
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_21 in Exclude<keyof I_1["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            SingleOrderLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_22 in Exclude<keyof I_1["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            MaxOrderQuantity?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_23 in Exclude<keyof I_1["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
        } & { [K_24 in Exclude<keyof I_1["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof UserDetails>]: never; }>(object: I_1): UserDetails;
};
export declare const Employment: {
    encode(message: Employment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Employment;
    fromJSON(object: any): Employment;
    toJSON(message: Employment): unknown;
    create<I extends {
        EmployerName?: string | undefined;
        JobTitle?: string | undefined;
        StartDate?: Date | undefined;
        EndDate?: Date | undefined;
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
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
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: ({
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & { [K in Exclude<keyof I["Income"], keyof Income>]: never; }) | undefined;
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
        } & { [K_1 in Exclude<keyof I["Contact"], keyof EmployerContact>]: never; }) | undefined;
        IsVerified?: boolean | undefined;
        VerifiedAt?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Employment>]: never; }>(base?: I | undefined): Employment;
    fromPartial<I_1 extends {
        EmployerName?: string | undefined;
        JobTitle?: string | undefined;
        StartDate?: Date | undefined;
        EndDate?: Date | undefined;
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
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
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: ({
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & { [K_3 in Exclude<keyof I_1["Income"], keyof Income>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I_1["Contact"], keyof EmployerContact>]: never; }) | undefined;
        IsVerified?: boolean | undefined;
        VerifiedAt?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Employment>]: never; }>(object: I_1): Employment;
};
export declare const Income: {
    encode(message: Income, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Income;
    fromJSON(object: any): Income;
    toJSON(message: Income): unknown;
    create<I extends {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & { [K in Exclude<keyof I, keyof Income>]: never; }>(base?: I | undefined): Income;
    fromPartial<I_1 extends {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Income>]: never; }>(object: I_1): Income;
};
export declare const EmployerContact: {
    encode(message: EmployerContact, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmployerContact;
    fromJSON(object: any): EmployerContact;
    toJSON(message: EmployerContact): unknown;
    create<I extends {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EmployerContact>]: never; }>(base?: I | undefined): EmployerContact;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EmployerContact>]: never; }>(object: I_1): EmployerContact;
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
                Type?: WalletType | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
            } | undefined;
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
                Type?: WalletType | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
            } | undefined;
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
                Type?: WalletType | undefined;
            }[] & ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
            } & {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
            } & { [K in Exclude<keyof I["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_1 in Exclude<keyof I["User"]["Wallets"], keyof {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
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
            } & { [K_2 in Exclude<keyof I["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_3 in Exclude<keyof I["User"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: ({
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } & {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } & { [K_4 in Exclude<keyof I["User"]["Language"], keyof Language>]: never; }) | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: ({
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: ({
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
                } & {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
                } & { [K_5 in Exclude<keyof I["User"]["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
                } & { [K_6 in Exclude<keyof I["User"]["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & { [K_7 in Exclude<keyof I["User"]["Employment"], keyof Employment>]: never; }) | undefined;
            Role?: Role | undefined;
            TradeProfile?: ({
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
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
            } & {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
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
            } & { [K_11 in Exclude<keyof I["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["User"], keyof UserDetails>]: never; }) | undefined;
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
        } & { [K_13 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_14 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I, keyof User>]: never; }>(base?: I | undefined): User;
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
                Type?: WalletType | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
            } | undefined;
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
                Type?: WalletType | undefined;
            }[] | undefined;
            Socials?: {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[] | undefined;
            Language?: {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: {
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
            } | undefined;
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
                Type?: WalletType | undefined;
            }[] & ({
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
            } & {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
            } & { [K_16 in Exclude<keyof I_1["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_17 in Exclude<keyof I_1["User"]["Wallets"], keyof {
                Address?: string | undefined;
                Alias?: string | undefined;
                Type?: WalletType | undefined;
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
            } & { [K_18 in Exclude<keyof I_1["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_19 in Exclude<keyof I_1["User"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: ({
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } & {
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
            } & { [K_20 in Exclude<keyof I_1["User"]["Language"], keyof Language>]: never; }) | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
            Employment?: ({
                EmployerName?: string | undefined;
                JobTitle?: string | undefined;
                StartDate?: Date | undefined;
                EndDate?: Date | undefined;
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
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
                Type?: EmploymentType | undefined;
                Industry?: string | undefined;
                Income?: ({
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
                } & {
                    Amount?: number | undefined;
                    Currency?: string | undefined;
                    Frequency?: IncomeFrequency | undefined;
                } & { [K_21 in Exclude<keyof I_1["User"]["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
                } & { [K_22 in Exclude<keyof I_1["User"]["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
                IsVerified?: boolean | undefined;
                VerifiedAt?: string | undefined;
            } & { [K_23 in Exclude<keyof I_1["User"]["Employment"], keyof Employment>]: never; }) | undefined;
            Role?: Role | undefined;
            TradeProfile?: ({
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
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
            } & {
                IsTradingEnabled?: boolean | undefined;
                IsOrderAcceptanceEnabled?: boolean | undefined;
                IsMarginTradingEnabled?: boolean | undefined;
                AggregateNotionalLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_24 in Exclude<keyof I_1["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                SingleOrderLimit?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_25 in Exclude<keyof I_1["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                MaxOrderQuantity?: ({
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & {
                    Value?: number | undefined;
                    IsGreaterThan?: boolean | undefined;
                } & { [K_26 in Exclude<keyof I_1["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                AggressivePercentage?: number | undefined;
                SymbolGrossADVPercent?: number | undefined;
                PriceCheckDeviation?: number | undefined;
                DuplicateOrderLimit?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I_1["User"], keyof UserDetails>]: never; }) | undefined;
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
        } & { [K_29 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_30 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_31 in Exclude<keyof I_1, keyof User>]: never; }>(object: I_1): User;
};
export declare const UserID: {
    encode(message: UserID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserID;
    fromJSON(object: any): UserID;
    toJSON(message: UserID): unknown;
    create<I extends {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof UserID>]: never; }>(base?: I | undefined): UserID;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        UserID?: string | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserID>]: never; }>(object: I_1): UserID;
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
export declare const Wallet: {
    encode(message: Wallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Wallet;
    fromJSON(object: any): Wallet;
    toJSON(message: Wallet): unknown;
    create<I extends {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
    } & {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
    } & { [K in Exclude<keyof I, keyof Wallet>]: never; }>(base?: I | undefined): Wallet;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
    } & {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Wallet>]: never; }>(object: I_1): Wallet;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] & ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
                } & {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
                } & { [K in Exclude<keyof I["Users"][number]["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_1 in Exclude<keyof I["Users"][number]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
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
                } & { [K_2 in Exclude<keyof I["Users"][number]["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_3 in Exclude<keyof I["Users"][number]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: ({
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } & {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } & { [K_4 in Exclude<keyof I["Users"][number]["User"]["Language"], keyof Language>]: never; }) | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: ({
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: ({
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
                    } & {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
                    } & { [K_5 in Exclude<keyof I["Users"][number]["User"]["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
                    } & { [K_6 in Exclude<keyof I["Users"][number]["User"]["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_7 in Exclude<keyof I["Users"][number]["User"]["Employment"], keyof Employment>]: never; }) | undefined;
                Role?: Role | undefined;
                TradeProfile?: ({
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
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
                } & {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
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
                } & { [K_11 in Exclude<keyof I["Users"][number]["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["Users"][number]["User"], keyof UserDetails>]: never; }) | undefined;
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
            } & { [K_13 in Exclude<keyof I["Users"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_14 in Exclude<keyof I["Users"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["Users"][number], keyof User>]: never; })[] & { [K_16 in Exclude<keyof I["Users"], keyof {
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_17 in Exclude<keyof I, keyof UserList>]: never; }>(base?: I | undefined): UserList;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
                    Type?: WalletType | undefined;
                }[] & ({
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
                } & {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
                } & { [K_18 in Exclude<keyof I_1["Users"][number]["User"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_19 in Exclude<keyof I_1["Users"][number]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: WalletType | undefined;
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
                } & { [K_20 in Exclude<keyof I_1["Users"][number]["User"]["Socials"][number], keyof Social>]: never; })[] & { [K_21 in Exclude<keyof I_1["Users"][number]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: ({
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } & {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } & { [K_22 in Exclude<keyof I_1["Users"][number]["User"]["Language"], keyof Language>]: never; }) | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: ({
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: ({
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
                    } & {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
                    } & { [K_23 in Exclude<keyof I_1["Users"][number]["User"]["Employment"]["Income"], keyof Income>]: never; }) | undefined;
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
                    } & { [K_24 in Exclude<keyof I_1["Users"][number]["User"]["Employment"]["Contact"], keyof EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_25 in Exclude<keyof I_1["Users"][number]["User"]["Employment"], keyof Employment>]: never; }) | undefined;
                Role?: Role | undefined;
                TradeProfile?: ({
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
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
                } & {
                    IsTradingEnabled?: boolean | undefined;
                    IsOrderAcceptanceEnabled?: boolean | undefined;
                    IsMarginTradingEnabled?: boolean | undefined;
                    AggregateNotionalLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_26 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    SingleOrderLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_27 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    MaxOrderQuantity?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_28 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                } & { [K_29 in Exclude<keyof I_1["Users"][number]["User"]["TradeProfile"], keyof TradeProfileDetails>]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I_1["Users"][number]["User"], keyof UserDetails>]: never; }) | undefined;
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
            } & { [K_31 in Exclude<keyof I_1["Users"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_32 in Exclude<keyof I_1["Users"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_33 in Exclude<keyof I_1["Users"][number], keyof User>]: never; })[] & { [K_34 in Exclude<keyof I_1["Users"], keyof {
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
                    Type?: WalletType | undefined;
                }[] | undefined;
                Socials?: {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[] | undefined;
                Language?: {
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
                Employment?: {
                    EmployerName?: string | undefined;
                    JobTitle?: string | undefined;
                    StartDate?: Date | undefined;
                    EndDate?: Date | undefined;
                    Type?: EmploymentType | undefined;
                    Industry?: string | undefined;
                    Income?: {
                        Amount?: number | undefined;
                        Currency?: string | undefined;
                        Frequency?: IncomeFrequency | undefined;
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
                } | undefined;
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
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof UserList>]: never; }>(object: I_1): UserList;
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
