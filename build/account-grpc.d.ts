/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Account, AccountID, UserStatus } from "./account";
import { Empty } from "./google/protobuf/empty";
import { Audit } from "./sologenic/com-fs-utils-lib/models/audit/audit";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "account";
export interface KYCApplicationID {
    /** UUID for the external user identifier in the KYC provider (called "externalUserID" in sumsub) */
    KYCApplicationID: string;
}
export interface SetStatusMessage {
    AccountID: string;
    Status: UserStatus;
    Network?: Network | undefined;
    Audit: Audit | undefined;
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
    readonly geyByKycApplicationId: {
        readonly path: "/account.AccountService/GeyByKYCApplicationID";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: KYCApplicationID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => KYCApplicationID;
        readonly responseSerialize: (value: Account) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Account;
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
};
export interface AccountServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<AccountID, Account>;
    geyByKycApplicationId: handleUnaryCall<KYCApplicationID, Account>;
    upsert: handleUnaryCall<Account, AccountID>;
    setStatus: handleUnaryCall<SetStatusMessage, Empty>;
}
export interface AccountServiceClient extends Client {
    get(request: AccountID, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    get(request: AccountID, metadata: Metadata, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    get(request: AccountID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    geyByKycApplicationId(request: KYCApplicationID, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    geyByKycApplicationId(request: KYCApplicationID, metadata: Metadata, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    geyByKycApplicationId(request: KYCApplicationID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Account) => void): ClientUnaryCall;
    upsert(request: Account, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    upsert(request: Account, metadata: Metadata, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    upsert(request: Account, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: AccountID) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: SetStatusMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
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
