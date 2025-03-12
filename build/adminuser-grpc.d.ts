/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { SetStatusMessage, User, UserID, UserList } from "./user";
export declare const protobufPackage = "user";
export interface KYCApplicationID {
    /** UUID for the external user identifier in the KYC provider (called "externalUserId" in sumsub) */
    KYCApplicationID: string;
}
export interface AuditFilter {
    AccountID?: string | undefined;
    ChangedBy?: string | undefined;
    Network?: Network | undefined;
    OrganizationID?: string | undefined;
    Limit?: number | undefined;
    Offset?: number | undefined;
}
export declare const KYCApplicationID: {
    encode(message: KYCApplicationID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KYCApplicationID;
    fromJSON(object: any): KYCApplicationID;
    toJSON(message: KYCApplicationID): unknown;
    create<I extends {
        KYCApplicationID?: string | undefined;
    } & {
        KYCApplicationID?: string | undefined;
    } & { [K in Exclude<keyof I, "KYCApplicationID">]: never; }>(base?: I | undefined): KYCApplicationID;
    fromPartial<I_1 extends {
        KYCApplicationID?: string | undefined;
    } & {
        KYCApplicationID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "KYCApplicationID">]: never; }>(object: I_1): KYCApplicationID;
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
    readonly getByKycApplicationId: {
        readonly path: "/user.AdminUserService/GetByKYCApplicationID";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: KYCApplicationID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => KYCApplicationID;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    readonly list: {
        readonly path: "/user.AdminUserService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
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
        readonly requestSerialize: (value: SetStatusMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => SetStatusMessage;
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
    getByKycApplicationId: handleUnaryCall<KYCApplicationID, User>;
    list: handleUnaryCall<Empty, UserList>;
    update: handleUnaryCall<User, UserID>;
    setStatus: handleUnaryCall<SetStatusMessage, Empty>;
    listAudit: handleUnaryCall<AuditFilter, UserList>;
}
export interface AdminUserServiceClient extends Client {
    get(request: UserID, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    getByKycApplicationId(request: KYCApplicationID, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    getByKycApplicationId(request: KYCApplicationID, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    getByKycApplicationId(request: KYCApplicationID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    list(request: Empty, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    list(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    list(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserList) => void): ClientUnaryCall;
    update(request: User, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    update(request: User, metadata: Metadata, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    update(request: User, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
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
