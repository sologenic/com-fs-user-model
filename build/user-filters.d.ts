import _m0 from "protobufjs/minimal";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { UserStatus } from "./user";
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
