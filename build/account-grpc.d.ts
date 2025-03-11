/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Account, AccountID, Accounts, UserStatus } from "./account";
import { Empty } from "./google/protobuf/empty";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "account";
/**
 * Field names are in the correct casing for direct usage in the queries,
 * prepended with the F_ representening the ENUM name (due to code generation
 * limitations: The set scope in C by the grpc code generator causes issues
 * with field names which are used already in other variable name)
 */
export declare enum Field {
    F_AccountID = 0,
    F_CreatedAt = 1,
    F_Alias = 2,
    UNRECOGNIZED = -1
}
export declare function fieldFromJSON(object: any): Field;
export declare function fieldToJSON(object: Field): string;
export declare enum OrderDirection {
    ASC = 0,
    DESC = 1,
    UNRECOGNIZED = -1
}
export declare function orderDirectionFromJSON(object: any): OrderDirection;
export declare function orderDirectionToJSON(object: OrderDirection): string;
export interface ExternalUserID {
    /** UUID for the external user identifier in the KYC provider */
    ExternalUserID: string;
}
export interface Filter {
    AccountIDs: string[];
    Order?: Order | undefined;
    /** Page offset */
    Offset?: number | undefined;
    /** Page limit */
    Limit?: number | undefined;
    Network?: Network | undefined;
    /** We want to limit the accounts to a specific organization, therefore this field is required */
    OrganizationID: string;
}
export interface Order {
    Field: Field;
    Direction: OrderDirection;
}
export interface SetStatusMessage {
    AccountID: string;
    Status: UserStatus;
    Network?: Network | undefined;
    Audit: Audit | undefined;
}
export interface AuditFilter {
    AccountID?: string | undefined;
    ChangedBy?: string | undefined;
    Network?: Network | undefined;
    OrganizationID?: string | undefined;
    Limit?: number | undefined;
    Offset?: number | undefined;
}
export declare const ExternalUserID: {
    encode(message: ExternalUserID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalUserID;
    fromJSON(object: any): ExternalUserID;
    toJSON(message: ExternalUserID): unknown;
    create<I extends {
        ExternalUserID?: string | undefined;
    } & {
        ExternalUserID?: string | undefined;
    } & { [K in Exclude<keyof I, "ExternalUserID">]: never; }>(base?: I | undefined): ExternalUserID;
    fromPartial<I_1 extends {
        ExternalUserID?: string | undefined;
    } & {
        ExternalUserID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "ExternalUserID">]: never; }>(object: I_1): ExternalUserID;
};
export declare const Filter: {
    encode(message: Filter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Filter;
    fromJSON(object: any): Filter;
    toJSON(message: Filter): unknown;
    create<I extends {
        AccountIDs?: string[] | undefined;
        Order?: {
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        AccountIDs?: (string[] & string[] & { [K in Exclude<keyof I["AccountIDs"], keyof string[]>]: never; }) | undefined;
        Order?: ({
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } & {
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } & { [K_1 in Exclude<keyof I["Order"], keyof Order>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Filter>]: never; }>(base?: I | undefined): Filter;
    fromPartial<I_1 extends {
        AccountIDs?: string[] | undefined;
        Order?: {
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & {
        AccountIDs?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["AccountIDs"], keyof string[]>]: never; }) | undefined;
        Order?: ({
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } & {
            Field?: Field | undefined;
            Direction?: OrderDirection | undefined;
        } & { [K_4 in Exclude<keyof I_1["Order"], keyof Order>]: never; }) | undefined;
        Offset?: number | undefined;
        Limit?: number | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Filter>]: never; }>(object: I_1): Filter;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    create<I extends {
        Field?: Field | undefined;
        Direction?: OrderDirection | undefined;
    } & {
        Field?: Field | undefined;
        Direction?: OrderDirection | undefined;
    } & { [K in Exclude<keyof I, keyof Order>]: never; }>(base?: I | undefined): Order;
    fromPartial<I_1 extends {
        Field?: Field | undefined;
        Direction?: OrderDirection | undefined;
    } & {
        Field?: Field | undefined;
        Direction?: OrderDirection | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Order>]: never; }>(object: I_1): Order;
};
export declare const SetStatusMessage: {
    encode(message: SetStatusMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SetStatusMessage;
    fromJSON(object: any): SetStatusMessage;
    toJSON(message: SetStatusMessage): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AccountID?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof SetStatusMessage>]: never; }>(base?: I | undefined): SetStatusMessage;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Status?: UserStatus | undefined;
        Network?: Network | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AccountID?: string | undefined;
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
    } & { [K_3 in Exclude<keyof I_1, keyof SetStatusMessage>]: never; }>(object: I_1): SetStatusMessage;
};
export declare const AuditFilter: {
    encode(message: AuditFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuditFilter;
    fromJSON(object: any): AuditFilter;
    toJSON(message: AuditFilter): unknown;
    create<I extends {
        AccountID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        AccountID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AuditFilter>]: never; }>(base?: I | undefined): AuditFilter;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        AccountID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AuditFilter>]: never; }>(object: I_1): AuditFilter;
};
export type AccountServiceService = typeof AccountServiceService;
export declare const AccountServiceService: {
    readonly get: {
        readonly path: "/account.AccountService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AccountID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AccountID;
        readonly responseSerialize: (value: Account) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Account;
    };
    readonly getByExternalUserId: {
        readonly path: "/account.AccountService/GetByExternalUserID";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: ExternalUserID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ExternalUserID;
        readonly responseSerialize: (value: Account) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Account;
    };
    readonly getAll: {
        readonly path: "/account.AccountService/GetAll";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Filter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Filter;
        readonly responseSerialize: (value: Accounts) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Accounts;
    };
    readonly upsert: {
        readonly path: "/account.AccountService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Account) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Account;
        readonly responseSerialize: (value: AccountID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => AccountID;
    };
    readonly setStatus: {
        readonly path: "/account.AccountService/SetStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: SetStatusMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetStatusMessage;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** Audit */
    readonly listAudit: {
        readonly path: "/account.AccountService/ListAudit";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AuditFilter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AuditFilter;
        readonly responseSerialize: (value: Accounts) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Accounts;
    };
};
export interface AccountServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<AccountID, Account>;
    getByExternalUserId: handleUnaryCall<ExternalUserID, Account>;
    getAll: handleUnaryCall<Filter, Accounts>;
    upsert: handleUnaryCall<Account, AccountID>;
    setStatus: handleUnaryCall<SetStatusMessage, Empty>;
    /** Audit */
    listAudit: handleUnaryCall<AuditFilter, Accounts>;
}
export interface AccountServiceClient extends Client {
    get(request: AccountID, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    get(request: AccountID, metadata: Metadata, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    get(request: AccountID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    getByExternalUserId(request: ExternalUserID, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    getByExternalUserId(request: ExternalUserID, metadata: Metadata, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    getByExternalUserId(request: ExternalUserID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    getAll(request: Filter, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
    getAll(request: Filter, metadata: Metadata, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
    getAll(request: Filter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
    upsert(request: Account, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    upsert(request: Account, metadata: Metadata, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    upsert(request: Account, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** Audit */
    listAudit(request: AuditFilter, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
    listAudit(request: AuditFilter, metadata: Metadata, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
    listAudit(request: AuditFilter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Accounts) => void): ClientUnaryCall;
}
export declare const AccountServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AccountServiceClient;
    service: typeof AccountServiceService;
    serviceName: string;
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
