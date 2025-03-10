import _m0 from "protobufjs/minimal";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "account";
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
export interface AccountDetails {
    /** email address used for firebase authentication */
    AccountID: string;
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
}
export interface Account {
    Account: AccountDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface AccountID {
    AccountID: string;
    Network?: Network | undefined;
}
export interface Accounts {
    Accounts: Account[];
    /** If there is more data, this is the offset to pass to the next call */
    Offset?: number | undefined;
}
/** Admin has no use for Socials, therefore will only be used for User */
export interface Social {
    URL: string;
    Type: SocialType;
}
export interface Wallet {
    Address: string;
    Alias: string;
    Type: WalletType;
}
export interface Language {
    AccountID: string;
    Language: string;
    UserConfigured: boolean;
    Network: string;
}
export declare const AccountDetails: {
    encode(message: AccountDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountDetails;
    fromJSON(object: any): AccountDetails;
    toJSON(message: AccountDetails): unknown;
    create<I extends {
        AccountID?: string | undefined;
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
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        AccountID?: string | undefined;
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
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } & {
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } & { [K_4 in Exclude<keyof I["Language"], keyof Language>]: never; }) | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_5 in Exclude<keyof I, keyof AccountDetails>]: never; }>(base?: I | undefined): AccountDetails;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
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
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
    } & {
        AccountID?: string | undefined;
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
        } & { [K_6 in Exclude<keyof I_1["Wallets"][number], keyof Wallet>]: never; })[] & { [K_7 in Exclude<keyof I_1["Wallets"], keyof {
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
        } & { [K_8 in Exclude<keyof I_1["Socials"][number], keyof Social>]: never; })[] & { [K_9 in Exclude<keyof I_1["Socials"], keyof {
            URL?: string | undefined;
            Type?: SocialType | undefined;
        }[]>]: never; }) | undefined;
        Language?: ({
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } & {
            AccountID?: string | undefined;
            Language?: string | undefined;
            UserConfigured?: boolean | undefined;
            Network?: string | undefined;
        } & { [K_10 in Exclude<keyof I_1["Language"], keyof Language>]: never; }) | undefined;
        ExternalUserID?: string | undefined;
        OrganizationID?: string | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof AccountDetails>]: never; }>(object: I_1): AccountDetails;
};
export declare const Account: {
    encode(message: Account, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Account;
    fromJSON(object: any): Account;
    toJSON(message: Account): unknown;
    create<I extends {
        Account?: {
            AccountID?: string | undefined;
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
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
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
        Account?: ({
            AccountID?: string | undefined;
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
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
        } & {
            AccountID?: string | undefined;
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
            } & { [K in Exclude<keyof I["Account"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_1 in Exclude<keyof I["Account"]["Wallets"], keyof {
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
            } & { [K_2 in Exclude<keyof I["Account"]["Socials"][number], keyof Social>]: never; })[] & { [K_3 in Exclude<keyof I["Account"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: ({
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } & {
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } & { [K_4 in Exclude<keyof I["Account"]["Language"], keyof Language>]: never; }) | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
        } & { [K_5 in Exclude<keyof I["Account"], keyof AccountDetails>]: never; }) | undefined;
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
        } & { [K_6 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_7 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Account>]: never; }>(base?: I | undefined): Account;
    fromPartial<I_1 extends {
        Account?: {
            AccountID?: string | undefined;
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
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
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
        Account?: ({
            AccountID?: string | undefined;
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
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
        } & {
            AccountID?: string | undefined;
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
            } & { [K_9 in Exclude<keyof I_1["Account"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_10 in Exclude<keyof I_1["Account"]["Wallets"], keyof {
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
            } & { [K_11 in Exclude<keyof I_1["Account"]["Socials"][number], keyof Social>]: never; })[] & { [K_12 in Exclude<keyof I_1["Account"]["Socials"], keyof {
                URL?: string | undefined;
                Type?: SocialType | undefined;
            }[]>]: never; }) | undefined;
            Language?: ({
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } & {
                AccountID?: string | undefined;
                Language?: string | undefined;
                UserConfigured?: boolean | undefined;
                Network?: string | undefined;
            } & { [K_13 in Exclude<keyof I_1["Account"]["Language"], keyof Language>]: never; }) | undefined;
            ExternalUserID?: string | undefined;
            OrganizationID?: string | undefined;
        } & { [K_14 in Exclude<keyof I_1["Account"], keyof AccountDetails>]: never; }) | undefined;
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
        } & { [K_15 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_16 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Account>]: never; }>(object: I_1): Account;
};
export declare const AccountID: {
    encode(message: AccountID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccountID;
    fromJSON(object: any): AccountID;
    toJSON(message: AccountID): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Network?: Network | undefined;
    } & {
        AccountID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof AccountID>]: never; }>(base?: I | undefined): AccountID;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Network?: Network | undefined;
    } & {
        AccountID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AccountID>]: never; }>(object: I_1): AccountID;
};
export declare const Accounts: {
    encode(message: Accounts, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Accounts;
    fromJSON(object: any): Accounts;
    toJSON(message: Accounts): unknown;
    create<I extends {
        Accounts?: {
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
        Accounts?: ({
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
            Account?: ({
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
            } & {
                AccountID?: string | undefined;
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
                } & { [K in Exclude<keyof I["Accounts"][number]["Account"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_1 in Exclude<keyof I["Accounts"][number]["Account"]["Wallets"], keyof {
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
                } & { [K_2 in Exclude<keyof I["Accounts"][number]["Account"]["Socials"][number], keyof Social>]: never; })[] & { [K_3 in Exclude<keyof I["Accounts"][number]["Account"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: ({
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } & {
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } & { [K_4 in Exclude<keyof I["Accounts"][number]["Account"]["Language"], keyof Language>]: never; }) | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
            } & { [K_5 in Exclude<keyof I["Accounts"][number]["Account"], keyof AccountDetails>]: never; }) | undefined;
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
            } & { [K_6 in Exclude<keyof I["Accounts"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_7 in Exclude<keyof I["Accounts"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["Accounts"][number], keyof Account>]: never; })[] & { [K_9 in Exclude<keyof I["Accounts"], keyof {
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
    } & { [K_10 in Exclude<keyof I, keyof Accounts>]: never; }>(base?: I | undefined): Accounts;
    fromPartial<I_1 extends {
        Accounts?: {
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
        Accounts?: ({
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
            Account?: ({
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
            } & {
                AccountID?: string | undefined;
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
                } & { [K_11 in Exclude<keyof I_1["Accounts"][number]["Account"]["Wallets"][number], keyof Wallet>]: never; })[] & { [K_12 in Exclude<keyof I_1["Accounts"][number]["Account"]["Wallets"], keyof {
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
                } & { [K_13 in Exclude<keyof I_1["Accounts"][number]["Account"]["Socials"][number], keyof Social>]: never; })[] & { [K_14 in Exclude<keyof I_1["Accounts"][number]["Account"]["Socials"], keyof {
                    URL?: string | undefined;
                    Type?: SocialType | undefined;
                }[]>]: never; }) | undefined;
                Language?: ({
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } & {
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } & { [K_15 in Exclude<keyof I_1["Accounts"][number]["Account"]["Language"], keyof Language>]: never; }) | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
            } & { [K_16 in Exclude<keyof I_1["Accounts"][number]["Account"], keyof AccountDetails>]: never; }) | undefined;
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
            } & { [K_17 in Exclude<keyof I_1["Accounts"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_18 in Exclude<keyof I_1["Accounts"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_19 in Exclude<keyof I_1["Accounts"][number], keyof Account>]: never; })[] & { [K_20 in Exclude<keyof I_1["Accounts"], keyof {
            Account?: {
                AccountID?: string | undefined;
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
                    AccountID?: string | undefined;
                    Language?: string | undefined;
                    UserConfigured?: boolean | undefined;
                    Network?: string | undefined;
                } | undefined;
                ExternalUserID?: string | undefined;
                OrganizationID?: string | undefined;
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
    } & { [K_21 in Exclude<keyof I_1, keyof Accounts>]: never; }>(object: I_1): Accounts;
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
export declare const Language: {
    encode(message: Language, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Language;
    fromJSON(object: any): Language;
    toJSON(message: Language): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Language?: string | undefined;
        UserConfigured?: boolean | undefined;
        Network?: string | undefined;
    } & {
        AccountID?: string | undefined;
        Language?: string | undefined;
        UserConfigured?: boolean | undefined;
        Network?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Language>]: never; }>(base?: I | undefined): Language;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Language?: string | undefined;
        UserConfigured?: boolean | undefined;
        Network?: string | undefined;
    } & {
        AccountID?: string | undefined;
        Language?: string | undefined;
        UserConfigured?: boolean | undefined;
        Network?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Language>]: never; }>(object: I_1): Language;
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
