/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { StatusMessage, User, UserList } from "./user";
import { Filter, UserID } from "./user-filters";
export declare const protobufPackage = "user";
export interface AuditFilter {
    UserID?: string | undefined;
    ChangedBy?: string | undefined;
    Network?: Network | undefined;
    OrganizationID?: string | undefined;
    Limit?: number | undefined;
    Offset?: number | undefined;
}
export declare const AuditFilter: {
    encode(message: AuditFilter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AuditFilter;
    fromJSON(object: any): AuditFilter;
    toJSON(message: AuditFilter): unknown;
    create<I extends {
        UserID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        UserID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AuditFilter>]: never; }>(base?: I | undefined): AuditFilter;
    fromPartial<I_1 extends {
        UserID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & {
        UserID?: string | undefined;
        ChangedBy?: string | undefined;
        Network?: Network | undefined;
        OrganizationID?: string | undefined;
        Limit?: number | undefined;
        Offset?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AuditFilter>]: never; }>(object: I_1): AuditFilter;
};
export type AdminUserServiceService = typeof AdminUserServiceService;
export declare const AdminUserServiceService: {
    readonly get: {
        readonly path: "/user.AdminUserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserID;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    readonly list: {
        readonly path: "/user.AdminUserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Filter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Filter;
        readonly responseSerialize: (value: UserList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserList;
    };
    readonly update: {
        readonly path: "/user.AdminUserService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: User) => Buffer;
        readonly requestDeserialize: (value: Buffer) => User;
        readonly responseSerialize: (value: UserID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserID;
    };
    readonly setStatus: {
        readonly path: "/user.AdminUserService/SetStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StatusMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StatusMessage;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly listAudit: {
        readonly path: "/user.AdminUserService/ListAudit";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AuditFilter) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AuditFilter;
        readonly responseSerialize: (value: UserList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserList;
    };
};
export interface AdminUserServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<UserID, User>;
    list: handleUnaryCall<Filter, UserList>;
    update: handleUnaryCall<User, UserID>;
    setStatus: handleUnaryCall<StatusMessage, Empty>;
    listAudit: handleUnaryCall<AuditFilter, UserList>;
}
export interface AdminUserServiceClient extends Client {
    get(request: UserID, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    list(request: Filter, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    list(request: Filter, metadata: Metadata, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    list(request: Filter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    update(request: User, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    update(request: User, metadata: Metadata, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    update(request: User, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    listAudit(request: AuditFilter, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    listAudit(request: AuditFilter, metadata: Metadata, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    listAudit(request: AuditFilter, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
}
export declare const AdminUserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AdminUserServiceClient;
    service: typeof AdminUserServiceService;
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
