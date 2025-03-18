/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "./google/protobuf/empty";
import { StatusMessage, User, UserID } from "./user";
export declare const protobufPackage = "user";
export type UserServiceService = typeof UserServiceService;
export declare const UserServiceService: {
    readonly get: {
        readonly path: "/user.UserService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UserID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UserID;
        readonly responseSerialize: (value: User) => Buffer;
        readonly responseDeserialize: (value: Buffer) => User;
    };
    readonly upsert: {
        readonly path: "/user.UserService/Upsert";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: User) => Buffer;
        readonly requestDeserialize: (value: Buffer) => User;
        readonly responseSerialize: (value: UserID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => UserID;
    };
    readonly setStatus: {
        readonly path: "/user.UserService/SetStatus";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: StatusMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => StatusMessage;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface UserServiceServer extends UntypedServiceImplementation {
    get: handleUnaryCall<UserID, User>;
    upsert: handleUnaryCall<User, UserID>;
    setStatus: handleUnaryCall<StatusMessage, Empty>;
}
export interface UserServiceClient extends Client {
    get(request: UserID, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    get(request: UserID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: User) => void): ClientUnaryCall;
    upsert(request: User, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    upsert(request: User, metadata: Metadata, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    upsert(request: User, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: UserID) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    setStatus(request: StatusMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const UserServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): UserServiceClient;
    service: typeof UserServiceService;
    serviceName: string;
};
