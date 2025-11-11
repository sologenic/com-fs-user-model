import _m0 from "protobufjs/minimal";
import { ClearingBroker } from "./sologenic/com-fs-utils-lib/models/order-properties/order-properties";
export declare const protobufPackage = "user";
export declare enum SignerType {
    NOT_USER_SIGNETTYPE = 0,
    MOBILE_APP = 1,
    BROWSER_LEAP = 2,
    BROWSER_COSMOSTATION = 3,
    BROWSER_KEPLR = 4,
    UNRECOGNIZED = -1
}
export declare function signerTypeFromJSON(object: any): SignerType;
export declare function signerTypeToJSON(object: SignerType): string;
export declare enum WalletType {
    NOT_USED_WALLETTYPE = 0,
    TFSA = 1,
    RRSP = 2,
    STANDARD = 3,
    UNRECOGNIZED = -1
}
export declare function walletTypeFromJSON(object: any): WalletType;
export declare function walletTypeToJSON(object: WalletType): string;
export interface Wallet {
    Address: string;
    Alias: string;
    Type: WalletType;
    SignerType: SignerType;
    /** List of organizations linked to this wallet address */
    Organizations: string[];
}
export interface BankAccount {
    AccountName: string;
    /** user's identifier in the bank account */
    BankName: string;
    /** bank address */
    BankAddress: string;
    /** bank account number */
    AccountNumber: string;
    /** bank routing number */
    ABA: string;
    SWIFT: string;
    IBAN: string;
}
export interface BrokerAccount {
    /** user's identifier in the broker account */
    AccountID: string;
    /** "RQD", etc. */
    Broker: ClearingBroker;
    /** broker identifier */
    OrganizationID: string;
    /** bank account profiles for the broker account */
    Profiles: string[];
}
export declare const Wallet: {
    encode(message: Wallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Wallet;
    fromJSON(object: any): Wallet;
    toJSON(message: Wallet): unknown;
    create<I extends {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
        SignerType?: SignerType | undefined;
        Organizations?: string[] | undefined;
    } & {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
        SignerType?: SignerType | undefined;
        Organizations?: (string[] & string[] & { [K in Exclude<keyof I["Organizations"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Wallet>]: never; }>(base?: I | undefined): Wallet;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
        SignerType?: SignerType | undefined;
        Organizations?: string[] | undefined;
    } & {
        Address?: string | undefined;
        Alias?: string | undefined;
        Type?: WalletType | undefined;
        SignerType?: SignerType | undefined;
        Organizations?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Organizations"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Wallet>]: never; }>(object: I_1): Wallet;
};
export declare const BankAccount: {
    encode(message: BankAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BankAccount;
    fromJSON(object: any): BankAccount;
    toJSON(message: BankAccount): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof BankAccount>]: never; }>(base?: I | undefined): BankAccount;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof BankAccount>]: never; }>(object: I_1): BankAccount;
};
export declare const BrokerAccount: {
    encode(message: BrokerAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BrokerAccount;
    fromJSON(object: any): BrokerAccount;
    toJSON(message: BrokerAccount): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Broker?: ClearingBroker | undefined;
        OrganizationID?: string | undefined;
        Profiles?: string[] | undefined;
    } & {
        AccountID?: string | undefined;
        Broker?: ClearingBroker | undefined;
        OrganizationID?: string | undefined;
        Profiles?: (string[] & string[] & { [K in Exclude<keyof I["Profiles"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof BrokerAccount>]: never; }>(base?: I | undefined): BrokerAccount;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Broker?: ClearingBroker | undefined;
        OrganizationID?: string | undefined;
        Profiles?: string[] | undefined;
    } & {
        AccountID?: string | undefined;
        Broker?: ClearingBroker | undefined;
        OrganizationID?: string | undefined;
        Profiles?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Profiles"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof BrokerAccount>]: never; }>(object: I_1): BrokerAccount;
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
