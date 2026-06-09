import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "user";
export declare enum KYCStatus {
    /** KYC_STATUS_UNSPECIFIED - Default value, should not be used */
    KYC_STATUS_UNSPECIFIED = 0,
    /** KYC_STATUS_PENDING - Inquiry created but not completed */
    KYC_STATUS_PENDING = 1,
    /** KYC_STATUS_IN_REVIEW - Inquiry submitted but under manual review */
    KYC_STATUS_IN_REVIEW = 2,
    /** KYC_STATUS_APPROVED - Inquiry completed and approved */
    KYC_STATUS_APPROVED = 3,
    /** KYC_STATUS_REJECTED - Inquiry completed and explicitly rejected */
    KYC_STATUS_REJECTED = 4,
    /** KYC_STATUS_FAILED - Inquiry failed due to an error (e.g., document mismatch, bad image quality) */
    KYC_STATUS_FAILED = 5,
    /** KYC_STATUS_EXPIRED - Inquiry expired (e.g., not completed in time) */
    KYC_STATUS_EXPIRED = 6,
    UNRECOGNIZED = -1
}
export declare function kYCStatusFromJSON(object: any): KYCStatus;
export declare function kYCStatusToJSON(object: KYCStatus): string;
export interface UserKYCDetails {
    Birthdate: string;
    PhoneNumber: string;
    EmailAddress: string;
    AddressStreet1: string;
    AddressStreet2: string;
    AddressCity: string;
    AddressSubdivision: string;
    AddressPostalCode: string;
    CountryCode: string;
    SocialSecurityNumber: string;
    IdentificationNumber: string;
    FirstName: string;
    LastName: string;
    MiddleName: string;
    AddressCountryCode: string;
    SelectedCountryCode: string;
    SelectedIDClass: string;
    ExpirationDate: string;
    IdentificationClass: string;
    CardAccessNumber: string;
    IssueDate: string;
    IssuingAuthority: string;
    CollectedEmailAddress: string;
}
export declare const UserKYCDetails: {
    encode(message: UserKYCDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserKYCDetails;
    fromJSON(object: any): UserKYCDetails;
    toJSON(message: UserKYCDetails): unknown;
    create<I extends {
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
        MiddleName?: string | undefined;
        AddressCountryCode?: string | undefined;
        SelectedCountryCode?: string | undefined;
        SelectedIDClass?: string | undefined;
        ExpirationDate?: string | undefined;
        IdentificationClass?: string | undefined;
        CardAccessNumber?: string | undefined;
        IssueDate?: string | undefined;
        IssuingAuthority?: string | undefined;
        CollectedEmailAddress?: string | undefined;
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
        MiddleName?: string | undefined;
        AddressCountryCode?: string | undefined;
        SelectedCountryCode?: string | undefined;
        SelectedIDClass?: string | undefined;
        ExpirationDate?: string | undefined;
        IdentificationClass?: string | undefined;
        CardAccessNumber?: string | undefined;
        IssueDate?: string | undefined;
        IssuingAuthority?: string | undefined;
        CollectedEmailAddress?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UserKYCDetails>]: never; }>(base?: I | undefined): UserKYCDetails;
    fromPartial<I_1 extends {
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
        MiddleName?: string | undefined;
        AddressCountryCode?: string | undefined;
        SelectedCountryCode?: string | undefined;
        SelectedIDClass?: string | undefined;
        ExpirationDate?: string | undefined;
        IdentificationClass?: string | undefined;
        CardAccessNumber?: string | undefined;
        IssueDate?: string | undefined;
        IssuingAuthority?: string | undefined;
        CollectedEmailAddress?: string | undefined;
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
        MiddleName?: string | undefined;
        AddressCountryCode?: string | undefined;
        SelectedCountryCode?: string | undefined;
        SelectedIDClass?: string | undefined;
        ExpirationDate?: string | undefined;
        IdentificationClass?: string | undefined;
        CardAccessNumber?: string | undefined;
        IssueDate?: string | undefined;
        IssuingAuthority?: string | undefined;
        CollectedEmailAddress?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserKYCDetails>]: never; }>(object: I_1): UserKYCDetails;
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
