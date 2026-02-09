import _m0 from "protobufjs/minimal";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { User, UserStatus } from "./user";
export declare const protobufPackage = "user";
export interface Filter {
    UserIDs: string[];
    Network?: Network | undefined;
    OrganizationID: string;
    Offset?: number | undefined;
    Limit?: number | undefined;
    InquiryID?: string | undefined;
    Status?: UserStatus | undefined;
    ExternalUserIDs: string[];
    WalletAddress?: string | undefined;
    BrokerAccountID?: string | undefined;
    Alias?: string | undefined;
}
export interface UserID {
    UserID: string;
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface GetByAddressesRequest {
    Addresses: string[];
    OrganizationID: string;
    Network?: Network | undefined;
}
export interface AddressUserPair {
    Address: string;
    /** null if address not found */
    User?: User | undefined;
}
export interface GetByAddressesResponse {
    Results: AddressUserPair[];
}
export declare const Filter: {
    encode(message: Filter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter;
    fromJSON(object: any): Filter;
    toJSON(message: Filter): unknown;
    create<I extends {
        UserIDs?: string[] | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        InquiryID?: string | undefined;
        Status?: UserStatus | undefined;
        ExternalUserIDs?: string[] | undefined;
        WalletAddress?: string | undefined;
        BrokerAccountID?: string | undefined;
        Alias?: string | undefined;
    } & {
        UserIDs?: (string[] & string[] & { [K in Exclude<keyof I["UserIDs"], keyof string[]>]: never; }) | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        InquiryID?: string | undefined;
        Status?: UserStatus | undefined;
        ExternalUserIDs?: (string[] & string[] & { [K_1 in Exclude<keyof I["ExternalUserIDs"], keyof string[]>]: never; }) | undefined;
        WalletAddress?: string | undefined;
        BrokerAccountID?: string | undefined;
        Alias?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Filter>]: never; }>(base?: I | undefined): Filter;
    fromPartial<I_1 extends {
        UserIDs?: string[] | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        InquiryID?: string | undefined;
        Status?: UserStatus | undefined;
        ExternalUserIDs?: string[] | undefined;
        WalletAddress?: string | undefined;
        BrokerAccountID?: string | undefined;
        Alias?: string | undefined;
    } & {
        UserIDs?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["UserIDs"], keyof string[]>]: never; }) | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        InquiryID?: string | undefined;
        Status?: UserStatus | undefined;
        ExternalUserIDs?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["ExternalUserIDs"], keyof string[]>]: never; }) | undefined;
        WalletAddress?: string | undefined;
        BrokerAccountID?: string | undefined;
        Alias?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Filter>]: never; }>(object: I_1): Filter;
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
export declare const GetByAddressesRequest: {
    encode(message: GetByAddressesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetByAddressesRequest;
    fromJSON(object: any): GetByAddressesRequest;
    toJSON(message: GetByAddressesRequest): unknown;
    create<I extends {
        Addresses?: string[] | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Addresses?: (string[] & string[] & { [K in Exclude<keyof I["Addresses"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I, keyof GetByAddressesRequest>]: never; }>(base?: I | undefined): GetByAddressesRequest;
    fromPartial<I_1 extends {
        Addresses?: string[] | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & {
        Addresses?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Addresses"], keyof string[]>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof GetByAddressesRequest>]: never; }>(object: I_1): GetByAddressesRequest;
};
export declare const AddressUserPair: {
    encode(message: AddressUserPair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AddressUserPair;
    fromJSON(object: any): AddressUserPair;
    toJSON(message: AddressUserPair): unknown;
    create<I extends {
        Address?: string | undefined;
        User?: {
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
        } | undefined;
    } & {
        Address?: string | undefined;
        User?: ({
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
                    Organizations?: (string[] & string[] & { [K in Exclude<keyof I["User"]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["User"]["User"]["Wallets"][number], keyof import("./user-fundings").Wallet>]: never; })[] & { [K_2 in Exclude<keyof I["User"]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                }[] & ({
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                } & {
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                } & { [K_3 in Exclude<keyof I["User"]["User"]["Socials"][number], keyof import("./user").Social>]: never; })[] & { [K_4 in Exclude<keyof I["User"]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    } & { [K_5 in Exclude<keyof I["User"]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
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
                    } & { [K_6 in Exclude<keyof I["User"]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_7 in Exclude<keyof I["User"]["User"]["Employment"], keyof import("./user-kyc").Employment>]: never; }) | undefined;
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    } & { [K_8 in Exclude<keyof I["User"]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    SingleOrderLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_9 in Exclude<keyof I["User"]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    MaxOrderQuantity?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_10 in Exclude<keyof I["User"]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & { [K_11 in Exclude<keyof I["User"]["User"]["TradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").TradeProfileDetails>]: never; }) | undefined;
                KYCInquiries?: (string[] & string[] & { [K_12 in Exclude<keyof I["User"]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_13 in Exclude<keyof I["User"]["User"]["KYCDetails"], keyof import("./user-kyc").UserKYCDetails>]: never; }) | undefined;
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
                    } & { [K_14 in Exclude<keyof I["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_15 in Exclude<keyof I["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_16 in Exclude<keyof I["User"]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
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
                } & { [K_17 in Exclude<keyof I["User"]["User"]["UserTradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").UserTradeProfile>]: never; }) | undefined;
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
                    Profiles?: (string[] & string[] & { [K_18 in Exclude<keyof I["User"]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                } & { [K_19 in Exclude<keyof I["User"]["User"]["BrokerAccounts"][number], keyof import("./user-fundings").BrokerAccount>]: never; })[] & { [K_20 in Exclude<keyof I["User"]["User"]["BrokerAccounts"], keyof {
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
                } & { [K_21 in Exclude<keyof I["User"]["User"]["BankAccounts"][number], keyof import("./user-fundings").BankAccount>]: never; })[] & { [K_22 in Exclude<keyof I["User"]["User"]["BankAccounts"], keyof {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[]>]: never; }) | undefined;
                UISettings?: ({
                    Theme?: import("./user").Theme | undefined;
                } & {
                    Theme?: import("./user").Theme | undefined;
                } & { [K_23 in Exclude<keyof I["User"]["User"]["UISettings"], "Theme">]: never; }) | undefined;
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
                    } & { [K_24 in Exclude<keyof I["User"]["User"]["CommissionSettings"]["Commission"], keyof import("./decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_25 in Exclude<keyof I["User"]["User"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
                DataFeedAccounts?: ({
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } & {
                    DxFeed?: ({
                        AccountID?: string | undefined;
                    } & {
                        AccountID?: string | undefined;
                    } & { [K_26 in Exclude<keyof I["User"]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                } & { [K_27 in Exclude<keyof I["User"]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                AllowedJurisdictions?: (string[] & string[] & { [K_28 in Exclude<keyof I["User"]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                EmailAddress?: string | undefined;
                ComplianceFormAnswers?: ({
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] & ({
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                } & {
                    ComplianceID?: string | undefined;
                    Answers?: ({
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    } & {
                        Question?: string | undefined;
                        Values?: (string[] & string[] & { [K_29 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
                        Files?: ({
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] & ({
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        } & {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        } & { [K_30 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").File>]: never; })[] & { [K_31 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"], keyof {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_32 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").QuestionAnswer>]: never; })[] & { [K_33 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number]["Answers"], keyof {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                } & { [K_34 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").ComplianceFormAnswer>]: never; })[] & { [K_35 in Exclude<keyof I["User"]["User"]["ComplianceFormAnswers"], keyof {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[]>]: never; }) | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
            } & { [K_36 in Exclude<keyof I["User"]["User"], keyof import("./user").UserDetails>]: never; }) | undefined;
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
            } & { [K_37 in Exclude<keyof I["User"]["MetaData"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_38 in Exclude<keyof I["User"]["Audit"], keyof import("./sologenic/com-fs-utils-lib/models/audit/audit").Audit>]: never; }) | undefined;
            OrganizationIDs?: (string[] & string[] & { [K_39 in Exclude<keyof I["User"]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
        } & { [K_40 in Exclude<keyof I["User"], keyof User>]: never; }) | undefined;
    } & { [K_41 in Exclude<keyof I, keyof AddressUserPair>]: never; }>(base?: I | undefined): AddressUserPair;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        User?: {
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
        } | undefined;
    } & {
        Address?: string | undefined;
        User?: ({
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
                    Type?: import("./user").SocialType | undefined;
                }[] | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                UserTradeProfile?: {
                    IsMarginTradingEnabled?: boolean | undefined;
                    IsShortSellingEnabled?: boolean | undefined;
                    SingleOrderLimit?: number | undefined;
                    MaxOrderQuantity?: number | undefined;
                } | undefined;
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
                    Theme?: import("./user").Theme | undefined;
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
                ComplianceFormAnswers?: {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
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
                    Organizations?: (string[] & string[] & { [K_42 in Exclude<keyof I_1["User"]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["User"]["User"]["Wallets"][number], keyof import("./user-fundings").Wallet>]: never; })[] & { [K_44 in Exclude<keyof I_1["User"]["User"]["Wallets"], keyof {
                    Address?: string | undefined;
                    Alias?: string | undefined;
                    Type?: import("./user-fundings").WalletType | undefined;
                    SignerType?: import("./user-fundings").SignerType | undefined;
                    Organizations?: string[] | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                }[] & ({
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                } & {
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                } & { [K_45 in Exclude<keyof I_1["User"]["User"]["Socials"][number], keyof import("./user").Social>]: never; })[] & { [K_46 in Exclude<keyof I_1["User"]["User"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: import("./user").SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    } & { [K_47 in Exclude<keyof I_1["User"]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
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
                    } & { [K_48 in Exclude<keyof I_1["User"]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                    IsVerified?: boolean | undefined;
                    VerifiedAt?: string | undefined;
                } & { [K_49 in Exclude<keyof I_1["User"]["User"]["Employment"], keyof import("./user-kyc").Employment>]: never; }) | undefined;
                Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    } & { [K_50 in Exclude<keyof I_1["User"]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    SingleOrderLimit?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_51 in Exclude<keyof I_1["User"]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    MaxOrderQuantity?: ({
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & {
                        Value?: number | undefined;
                        IsGreaterThan?: boolean | undefined;
                    } & { [K_52 in Exclude<keyof I_1["User"]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                    AggressivePercentage?: number | undefined;
                    SymbolGrossADVPercent?: number | undefined;
                    PriceCheckDeviation?: number | undefined;
                    DuplicateOrderLimit?: number | undefined;
                    RiskMultiplier?: number | undefined;
                } & { [K_53 in Exclude<keyof I_1["User"]["User"]["TradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").TradeProfileDetails>]: never; }) | undefined;
                KYCInquiries?: (string[] & string[] & { [K_54 in Exclude<keyof I_1["User"]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_55 in Exclude<keyof I_1["User"]["User"]["KYCDetails"], keyof import("./user-kyc").UserKYCDetails>]: never; }) | undefined;
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
                    } & { [K_56 in Exclude<keyof I_1["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_57 in Exclude<keyof I_1["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                        Name?: string | undefined;
                        SignedVersion?: string | undefined;
                        DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                        SignedAt?: Date | undefined;
                        FileMD5SUM?: string | undefined;
                        TXID?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_58 in Exclude<keyof I_1["User"]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                KYCStatus?: import("./user-kyc").KYCStatus | undefined;
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
                } & { [K_59 in Exclude<keyof I_1["User"]["User"]["UserTradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").UserTradeProfile>]: never; }) | undefined;
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
                    Profiles?: (string[] & string[] & { [K_60 in Exclude<keyof I_1["User"]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I_1["User"]["User"]["BrokerAccounts"][number], keyof import("./user-fundings").BrokerAccount>]: never; })[] & { [K_62 in Exclude<keyof I_1["User"]["User"]["BrokerAccounts"], keyof {
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
                } & { [K_63 in Exclude<keyof I_1["User"]["User"]["BankAccounts"][number], keyof import("./user-fundings").BankAccount>]: never; })[] & { [K_64 in Exclude<keyof I_1["User"]["User"]["BankAccounts"], keyof {
                    AccountName?: string | undefined;
                    BankName?: string | undefined;
                    BankAddress?: string | undefined;
                    AccountNumber?: string | undefined;
                    ABA?: string | undefined;
                    SWIFT?: string | undefined;
                    IBAN?: string | undefined;
                }[]>]: never; }) | undefined;
                UISettings?: ({
                    Theme?: import("./user").Theme | undefined;
                } & {
                    Theme?: import("./user").Theme | undefined;
                } & { [K_65 in Exclude<keyof I_1["User"]["User"]["UISettings"], "Theme">]: never; }) | undefined;
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
                    } & { [K_66 in Exclude<keyof I_1["User"]["User"]["CommissionSettings"]["Commission"], keyof import("./decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_67 in Exclude<keyof I_1["User"]["User"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
                DataFeedAccounts?: ({
                    DxFeed?: {
                        AccountID?: string | undefined;
                    } | undefined;
                } & {
                    DxFeed?: ({
                        AccountID?: string | undefined;
                    } & {
                        AccountID?: string | undefined;
                    } & { [K_68 in Exclude<keyof I_1["User"]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                } & { [K_69 in Exclude<keyof I_1["User"]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                AllowedJurisdictions?: (string[] & string[] & { [K_70 in Exclude<keyof I_1["User"]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                EmailAddress?: string | undefined;
                ComplianceFormAnswers?: ({
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[] & ({
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                } & {
                    ComplianceID?: string | undefined;
                    Answers?: ({
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    } & {
                        Question?: string | undefined;
                        Values?: (string[] & string[] & { [K_71 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
                        Files?: ({
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] & ({
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        } & {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        } & { [K_72 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").File>]: never; })[] & { [K_73 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"], keyof {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_74 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").QuestionAnswer>]: never; })[] & { [K_75 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number]["Answers"], keyof {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                } & { [K_76 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").ComplianceFormAnswer>]: never; })[] & { [K_77 in Exclude<keyof I_1["User"]["User"]["ComplianceFormAnswers"], keyof {
                    ComplianceID?: string | undefined;
                    Answers?: {
                        Question?: string | undefined;
                        Values?: string[] | undefined;
                        Files?: {
                            Description?: string | undefined;
                            Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                            Hash?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                    SubmittedAt?: Date | undefined;
                }[]>]: never; }) | undefined;
                ReferredBy?: string | undefined;
                ReferralCount?: number | undefined;
                ReferralLimit?: number | undefined;
                ReferralAmountReceived?: number | undefined;
                ReferralAmount?: number | undefined;
                ReferralPaidAt?: Date | undefined;
            } & { [K_78 in Exclude<keyof I_1["User"]["User"], keyof import("./user").UserDetails>]: never; }) | undefined;
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
            } & { [K_79 in Exclude<keyof I_1["User"]["MetaData"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_80 in Exclude<keyof I_1["User"]["Audit"], keyof import("./sologenic/com-fs-utils-lib/models/audit/audit").Audit>]: never; }) | undefined;
            OrganizationIDs?: (string[] & string[] & { [K_81 in Exclude<keyof I_1["User"]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
        } & { [K_82 in Exclude<keyof I_1["User"], keyof User>]: never; }) | undefined;
    } & { [K_83 in Exclude<keyof I_1, keyof AddressUserPair>]: never; }>(object: I_1): AddressUserPair;
};
export declare const GetByAddressesResponse: {
    encode(message: GetByAddressesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetByAddressesResponse;
    fromJSON(object: any): GetByAddressesResponse;
    toJSON(message: GetByAddressesResponse): unknown;
    create<I extends {
        Results?: {
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[] | undefined;
    } & {
        Results?: ({
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[] & ({
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        } & {
            Address?: string | undefined;
            User?: ({
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
                        Organizations?: (string[] & string[] & { [K in Exclude<keyof I["Results"][number]["User"]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                    } & { [K_1 in Exclude<keyof I["Results"][number]["User"]["User"]["Wallets"][number], keyof import("./user-fundings").Wallet>]: never; })[] & { [K_2 in Exclude<keyof I["Results"][number]["User"]["User"]["Wallets"], keyof {
                        Address?: string | undefined;
                        Alias?: string | undefined;
                        Type?: import("./user-fundings").WalletType | undefined;
                        SignerType?: import("./user-fundings").SignerType | undefined;
                        Organizations?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    }[] & ({
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    } & {
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    } & { [K_3 in Exclude<keyof I["Results"][number]["User"]["User"]["Socials"][number], keyof import("./user").Social>]: never; })[] & { [K_4 in Exclude<keyof I["Results"][number]["User"]["User"]["Socials"], keyof {
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    }[]>]: never; }) | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                        } & { [K_5 in Exclude<keyof I["Results"][number]["User"]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
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
                        } & { [K_6 in Exclude<keyof I["Results"][number]["User"]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                        IsVerified?: boolean | undefined;
                        VerifiedAt?: string | undefined;
                    } & { [K_7 in Exclude<keyof I["Results"][number]["User"]["User"]["Employment"], keyof import("./user-kyc").Employment>]: never; }) | undefined;
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                        } & { [K_8 in Exclude<keyof I["Results"][number]["User"]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        SingleOrderLimit?: ({
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & {
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & { [K_9 in Exclude<keyof I["Results"][number]["User"]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        MaxOrderQuantity?: ({
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & {
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & { [K_10 in Exclude<keyof I["Results"][number]["User"]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        AggressivePercentage?: number | undefined;
                        SymbolGrossADVPercent?: number | undefined;
                        PriceCheckDeviation?: number | undefined;
                        DuplicateOrderLimit?: number | undefined;
                        RiskMultiplier?: number | undefined;
                    } & { [K_11 in Exclude<keyof I["Results"][number]["User"]["User"]["TradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").TradeProfileDetails>]: never; }) | undefined;
                    KYCInquiries?: (string[] & string[] & { [K_12 in Exclude<keyof I["Results"][number]["User"]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_13 in Exclude<keyof I["Results"][number]["User"]["User"]["KYCDetails"], keyof import("./user-kyc").UserKYCDetails>]: never; }) | undefined;
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
                        } & { [K_14 in Exclude<keyof I["Results"][number]["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_15 in Exclude<keyof I["Results"][number]["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                            Name?: string | undefined;
                            SignedVersion?: string | undefined;
                            DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                            SignedAt?: Date | undefined;
                            FileMD5SUM?: string | undefined;
                            TXID?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_16 in Exclude<keyof I["Results"][number]["User"]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
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
                    } & { [K_17 in Exclude<keyof I["Results"][number]["User"]["User"]["UserTradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").UserTradeProfile>]: never; }) | undefined;
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
                        Profiles?: (string[] & string[] & { [K_18 in Exclude<keyof I["Results"][number]["User"]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                    } & { [K_19 in Exclude<keyof I["Results"][number]["User"]["User"]["BrokerAccounts"][number], keyof import("./user-fundings").BrokerAccount>]: never; })[] & { [K_20 in Exclude<keyof I["Results"][number]["User"]["User"]["BrokerAccounts"], keyof {
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
                    } & { [K_21 in Exclude<keyof I["Results"][number]["User"]["User"]["BankAccounts"][number], keyof import("./user-fundings").BankAccount>]: never; })[] & { [K_22 in Exclude<keyof I["Results"][number]["User"]["User"]["BankAccounts"], keyof {
                        AccountName?: string | undefined;
                        BankName?: string | undefined;
                        BankAddress?: string | undefined;
                        AccountNumber?: string | undefined;
                        ABA?: string | undefined;
                        SWIFT?: string | undefined;
                        IBAN?: string | undefined;
                    }[]>]: never; }) | undefined;
                    UISettings?: ({
                        Theme?: import("./user").Theme | undefined;
                    } & {
                        Theme?: import("./user").Theme | undefined;
                    } & { [K_23 in Exclude<keyof I["Results"][number]["User"]["User"]["UISettings"], "Theme">]: never; }) | undefined;
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
                        } & { [K_24 in Exclude<keyof I["Results"][number]["User"]["User"]["CommissionSettings"]["Commission"], keyof import("./decimal/decimal").Decimal>]: never; }) | undefined;
                        CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                    } & { [K_25 in Exclude<keyof I["Results"][number]["User"]["User"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
                    DataFeedAccounts?: ({
                        DxFeed?: {
                            AccountID?: string | undefined;
                        } | undefined;
                    } & {
                        DxFeed?: ({
                            AccountID?: string | undefined;
                        } & {
                            AccountID?: string | undefined;
                        } & { [K_26 in Exclude<keyof I["Results"][number]["User"]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                    } & { [K_27 in Exclude<keyof I["Results"][number]["User"]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                    AllowedJurisdictions?: (string[] & string[] & { [K_28 in Exclude<keyof I["Results"][number]["User"]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                    EmailAddress?: string | undefined;
                    ComplianceFormAnswers?: ({
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] & ({
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    } & {
                        ComplianceID?: string | undefined;
                        Answers?: ({
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] & ({
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        } & {
                            Question?: string | undefined;
                            Values?: (string[] & string[] & { [K_29 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
                            Files?: ({
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] & ({
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            } & {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            } & { [K_30 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").File>]: never; })[] & { [K_31 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"], keyof {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_32 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").QuestionAnswer>]: never; })[] & { [K_33 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"], keyof {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    } & { [K_34 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").ComplianceFormAnswer>]: never; })[] & { [K_35 in Exclude<keyof I["Results"][number]["User"]["User"]["ComplianceFormAnswers"], keyof {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[]>]: never; }) | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
                } & { [K_36 in Exclude<keyof I["Results"][number]["User"]["User"], keyof import("./user").UserDetails>]: never; }) | undefined;
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
                } & { [K_37 in Exclude<keyof I["Results"][number]["User"]["MetaData"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaData>]: never; }) | undefined;
                Audit?: ({
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & {
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & { [K_38 in Exclude<keyof I["Results"][number]["User"]["Audit"], keyof import("./sologenic/com-fs-utils-lib/models/audit/audit").Audit>]: never; }) | undefined;
                OrganizationIDs?: (string[] & string[] & { [K_39 in Exclude<keyof I["Results"][number]["User"]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
            } & { [K_40 in Exclude<keyof I["Results"][number]["User"], keyof User>]: never; }) | undefined;
        } & { [K_41 in Exclude<keyof I["Results"][number], keyof AddressUserPair>]: never; })[] & { [K_42 in Exclude<keyof I["Results"], keyof {
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_43 in Exclude<keyof I, "Results">]: never; }>(base?: I | undefined): GetByAddressesResponse;
    fromPartial<I_1 extends {
        Results?: {
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[] | undefined;
    } & {
        Results?: ({
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[] & ({
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        } & {
            Address?: string | undefined;
            User?: ({
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
                        Organizations?: (string[] & string[] & { [K_44 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Wallets"][number]["Organizations"], keyof string[]>]: never; }) | undefined;
                    } & { [K_45 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Wallets"][number], keyof import("./user-fundings").Wallet>]: never; })[] & { [K_46 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Wallets"], keyof {
                        Address?: string | undefined;
                        Alias?: string | undefined;
                        Type?: import("./user-fundings").WalletType | undefined;
                        SignerType?: import("./user-fundings").SignerType | undefined;
                        Organizations?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    }[] & ({
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    } & {
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    } & { [K_47 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Socials"][number], keyof import("./user").Social>]: never; })[] & { [K_48 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Socials"], keyof {
                        URL?: string | undefined;
                        Type?: import("./user").SocialType | undefined;
                    }[]>]: never; }) | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                        } & { [K_49 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Employment"]["Income"], keyof import("./user-kyc").Income>]: never; }) | undefined;
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
                        } & { [K_50 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Employment"]["Contact"], keyof import("./user-kyc").EmployerContact>]: never; }) | undefined;
                        IsVerified?: boolean | undefined;
                        VerifiedAt?: string | undefined;
                    } & { [K_51 in Exclude<keyof I_1["Results"][number]["User"]["User"]["Employment"], keyof import("./user-kyc").Employment>]: never; }) | undefined;
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                        } & { [K_52 in Exclude<keyof I_1["Results"][number]["User"]["User"]["TradeProfile"]["AggregateNotionalLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        SingleOrderLimit?: ({
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & {
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & { [K_53 in Exclude<keyof I_1["Results"][number]["User"]["User"]["TradeProfile"]["SingleOrderLimit"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        MaxOrderQuantity?: ({
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & {
                            Value?: number | undefined;
                            IsGreaterThan?: boolean | undefined;
                        } & { [K_54 in Exclude<keyof I_1["Results"][number]["User"]["User"]["TradeProfile"]["MaxOrderQuantity"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").DropdownNumericValue>]: never; }) | undefined;
                        AggressivePercentage?: number | undefined;
                        SymbolGrossADVPercent?: number | undefined;
                        PriceCheckDeviation?: number | undefined;
                        DuplicateOrderLimit?: number | undefined;
                        RiskMultiplier?: number | undefined;
                    } & { [K_55 in Exclude<keyof I_1["Results"][number]["User"]["User"]["TradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").TradeProfileDetails>]: never; }) | undefined;
                    KYCInquiries?: (string[] & string[] & { [K_56 in Exclude<keyof I_1["Results"][number]["User"]["User"]["KYCInquiries"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_57 in Exclude<keyof I_1["Results"][number]["User"]["User"]["KYCDetails"], keyof import("./user-kyc").UserKYCDetails>]: never; }) | undefined;
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
                        } & { [K_58 in Exclude<keyof I_1["Results"][number]["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"][number], keyof import("./sologenic/com-fs-document-model/document").SignedDocument>]: never; })[] & { [K_59 in Exclude<keyof I_1["Results"][number]["User"]["User"]["UserDocumentCompliance"]["SignedDocuments"], keyof {
                            Name?: string | undefined;
                            SignedVersion?: string | undefined;
                            DocumentState?: import("./sologenic/com-fs-document-model/document").DocumentState | undefined;
                            SignedAt?: Date | undefined;
                            FileMD5SUM?: string | undefined;
                            TXID?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_60 in Exclude<keyof I_1["Results"][number]["User"]["User"]["UserDocumentCompliance"], "SignedDocuments">]: never; }) | undefined;
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
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
                    } & { [K_61 in Exclude<keyof I_1["Results"][number]["User"]["User"]["UserTradeProfile"], keyof import("./sologenic/com-fs-trade-profile-model/tradeprofile").UserTradeProfile>]: never; }) | undefined;
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
                        Profiles?: (string[] & string[] & { [K_62 in Exclude<keyof I_1["Results"][number]["User"]["User"]["BrokerAccounts"][number]["Profiles"], keyof string[]>]: never; }) | undefined;
                    } & { [K_63 in Exclude<keyof I_1["Results"][number]["User"]["User"]["BrokerAccounts"][number], keyof import("./user-fundings").BrokerAccount>]: never; })[] & { [K_64 in Exclude<keyof I_1["Results"][number]["User"]["User"]["BrokerAccounts"], keyof {
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
                    } & { [K_65 in Exclude<keyof I_1["Results"][number]["User"]["User"]["BankAccounts"][number], keyof import("./user-fundings").BankAccount>]: never; })[] & { [K_66 in Exclude<keyof I_1["Results"][number]["User"]["User"]["BankAccounts"], keyof {
                        AccountName?: string | undefined;
                        BankName?: string | undefined;
                        BankAddress?: string | undefined;
                        AccountNumber?: string | undefined;
                        ABA?: string | undefined;
                        SWIFT?: string | undefined;
                        IBAN?: string | undefined;
                    }[]>]: never; }) | undefined;
                    UISettings?: ({
                        Theme?: import("./user").Theme | undefined;
                    } & {
                        Theme?: import("./user").Theme | undefined;
                    } & { [K_67 in Exclude<keyof I_1["Results"][number]["User"]["User"]["UISettings"], "Theme">]: never; }) | undefined;
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
                        } & { [K_68 in Exclude<keyof I_1["Results"][number]["User"]["User"]["CommissionSettings"]["Commission"], keyof import("./decimal/decimal").Decimal>]: never; }) | undefined;
                        CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                    } & { [K_69 in Exclude<keyof I_1["Results"][number]["User"]["User"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
                    DataFeedAccounts?: ({
                        DxFeed?: {
                            AccountID?: string | undefined;
                        } | undefined;
                    } & {
                        DxFeed?: ({
                            AccountID?: string | undefined;
                        } & {
                            AccountID?: string | undefined;
                        } & { [K_70 in Exclude<keyof I_1["Results"][number]["User"]["User"]["DataFeedAccounts"]["DxFeed"], "AccountID">]: never; }) | undefined;
                    } & { [K_71 in Exclude<keyof I_1["Results"][number]["User"]["User"]["DataFeedAccounts"], "DxFeed">]: never; }) | undefined;
                    AllowedJurisdictions?: (string[] & string[] & { [K_72 in Exclude<keyof I_1["Results"][number]["User"]["User"]["AllowedJurisdictions"], keyof string[]>]: never; }) | undefined;
                    EmailAddress?: string | undefined;
                    ComplianceFormAnswers?: ({
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] & ({
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    } & {
                        ComplianceID?: string | undefined;
                        Answers?: ({
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] & ({
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        } & {
                            Question?: string | undefined;
                            Values?: (string[] & string[] & { [K_73 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
                            Files?: ({
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] & ({
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            } & {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            } & { [K_74 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").File>]: never; })[] & { [K_75 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number]["Files"], keyof {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[]>]: never; }) | undefined;
                        } & { [K_76 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").QuestionAnswer>]: never; })[] & { [K_77 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number]["Answers"], keyof {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[]>]: never; }) | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    } & { [K_78 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"][number], keyof import("./sologenic/com-fs-compliance-model/compliance").ComplianceFormAnswer>]: never; })[] & { [K_79 in Exclude<keyof I_1["Results"][number]["User"]["User"]["ComplianceFormAnswers"], keyof {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[]>]: never; }) | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
                } & { [K_80 in Exclude<keyof I_1["Results"][number]["User"]["User"], keyof import("./user").UserDetails>]: never; }) | undefined;
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
                } & { [K_81 in Exclude<keyof I_1["Results"][number]["User"]["MetaData"], keyof import("./sologenic/com-fs-utils-lib/models/metadata/metadata").MetaData>]: never; }) | undefined;
                Audit?: ({
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & {
                    ChangedBy?: string | undefined;
                    ChangedAt?: Date | undefined;
                    Reason?: string | undefined;
                } & { [K_82 in Exclude<keyof I_1["Results"][number]["User"]["Audit"], keyof import("./sologenic/com-fs-utils-lib/models/audit/audit").Audit>]: never; }) | undefined;
                OrganizationIDs?: (string[] & string[] & { [K_83 in Exclude<keyof I_1["Results"][number]["User"]["OrganizationIDs"], keyof string[]>]: never; }) | undefined;
            } & { [K_84 in Exclude<keyof I_1["Results"][number]["User"], keyof User>]: never; }) | undefined;
        } & { [K_85 in Exclude<keyof I_1["Results"][number], keyof AddressUserPair>]: never; })[] & { [K_86 in Exclude<keyof I_1["Results"], keyof {
            Address?: string | undefined;
            User?: {
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
                        Type?: import("./user").SocialType | undefined;
                    }[] | undefined;
                    Language?: import("./sologenic/com-fs-utils-lib/models/language/language").Lang | undefined;
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
                    Role?: import("./sologenic/com-fs-utils-lib/models/role/role").Role | undefined;
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
                    KYCStatus?: import("./user-kyc").KYCStatus | undefined;
                    UserTradeProfile?: {
                        IsMarginTradingEnabled?: boolean | undefined;
                        IsShortSellingEnabled?: boolean | undefined;
                        SingleOrderLimit?: number | undefined;
                        MaxOrderQuantity?: number | undefined;
                    } | undefined;
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
                        Theme?: import("./user").Theme | undefined;
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
                    ComplianceFormAnswers?: {
                        ComplianceID?: string | undefined;
                        Answers?: {
                            Question?: string | undefined;
                            Values?: string[] | undefined;
                            Files?: {
                                Description?: string | undefined;
                                Optionality?: import("./sologenic/com-fs-compliance-model/compliance").Optionality | undefined;
                                Hash?: string | undefined;
                            }[] | undefined;
                        }[] | undefined;
                        FormStatus?: import("./sologenic/com-fs-compliance-model/compliance").FormStatus | undefined;
                        SubmittedAt?: Date | undefined;
                    }[] | undefined;
                    ReferredBy?: string | undefined;
                    ReferralCount?: number | undefined;
                    ReferralLimit?: number | undefined;
                    ReferralAmountReceived?: number | undefined;
                    ReferralAmount?: number | undefined;
                    ReferralPaidAt?: Date | undefined;
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
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_87 in Exclude<keyof I_1, "Results">]: never; }>(object: I_1): GetByAddressesResponse;
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
