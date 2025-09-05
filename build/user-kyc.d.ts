import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "user";
export declare enum EmploymentType {
    NOT_USED_EMPLOYMENTTYPE = 0,
    FULL_TIME = 1,
    PART_TIME = 2,
    CONTRACT = 3,
    FREELANCE = 4,
    SELF_EMPLOYED = 5,
    INTERNSHIP = 6,
    UNRECOGNIZED = -1
}
export declare function employmentTypeFromJSON(object: any): EmploymentType;
export declare function employmentTypeToJSON(object: EmploymentType): string;
export declare enum IncomeFrequency {
    NOT_USED_INCOMEFREQUENCY = 0,
    HOURLY = 1,
    WEEKLY = 2,
    BI_WEEKLY = 3,
    MONTHLY = 4,
    ANNUALLY = 5,
    UNRECOGNIZED = -1
}
export declare function incomeFrequencyFromJSON(object: any): IncomeFrequency;
export declare function incomeFrequencyToJSON(object: IncomeFrequency): string;
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
export interface IDNumber {
    IssuingCountry: string;
    IdentificationClass: string;
    IdentificationNumber: string;
}
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
}
export interface Employment {
    EmployerName: string;
    JobTitle: string;
    StartDate: Date | undefined;
    /** Empty if still employed */
    EndDate: Date | undefined;
    Type: EmploymentType;
    Industry?: string | undefined;
    Income: Income | undefined;
    Contact: EmployerContact | undefined;
    IsVerified: boolean;
    VerifiedAt: string;
}
export interface Income {
    Amount: number;
    Currency: string;
    Frequency: IncomeFrequency;
}
export interface EmployerContact {
    Name: string;
    Email: string;
    Phone: string;
    Address: string;
}
export declare const IDNumber: {
    encode(message: IDNumber, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDNumber;
    fromJSON(object: any): IDNumber;
    toJSON(message: IDNumber): unknown;
    create<I extends {
        IssuingCountry?: string | undefined;
        IdentificationClass?: string | undefined;
        IdentificationNumber?: string | undefined;
    } & {
        IssuingCountry?: string | undefined;
        IdentificationClass?: string | undefined;
        IdentificationNumber?: string | undefined;
    } & { [K in Exclude<keyof I, keyof IDNumber>]: never; }>(base?: I | undefined): IDNumber;
    fromPartial<I_1 extends {
        IssuingCountry?: string | undefined;
        IdentificationClass?: string | undefined;
        IdentificationNumber?: string | undefined;
    } & {
        IssuingCountry?: string | undefined;
        IdentificationClass?: string | undefined;
        IdentificationNumber?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof IDNumber>]: never; }>(object: I_1): IDNumber;
};
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
    } & { [K_1 in Exclude<keyof I_1, keyof UserKYCDetails>]: never; }>(object: I_1): UserKYCDetails;
};
export declare const Employment: {
    encode(message: Employment, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Employment;
    fromJSON(object: any): Employment;
    toJSON(message: Employment): unknown;
    create<I extends {
        EmployerName?: string | undefined;
        JobTitle?: string | undefined;
        StartDate?: Date | undefined;
        EndDate?: Date | undefined;
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
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
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: ({
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & { [K in Exclude<keyof I["Income"], keyof Income>]: never; }) | undefined;
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
        } & { [K_1 in Exclude<keyof I["Contact"], keyof EmployerContact>]: never; }) | undefined;
        IsVerified?: boolean | undefined;
        VerifiedAt?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Employment>]: never; }>(base?: I | undefined): Employment;
    fromPartial<I_1 extends {
        EmployerName?: string | undefined;
        JobTitle?: string | undefined;
        StartDate?: Date | undefined;
        EndDate?: Date | undefined;
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
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
        Type?: EmploymentType | undefined;
        Industry?: string | undefined;
        Income?: ({
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & {
            Amount?: number | undefined;
            Currency?: string | undefined;
            Frequency?: IncomeFrequency | undefined;
        } & { [K_3 in Exclude<keyof I_1["Income"], keyof Income>]: never; }) | undefined;
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
        } & { [K_4 in Exclude<keyof I_1["Contact"], keyof EmployerContact>]: never; }) | undefined;
        IsVerified?: boolean | undefined;
        VerifiedAt?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Employment>]: never; }>(object: I_1): Employment;
};
export declare const Income: {
    encode(message: Income, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Income;
    fromJSON(object: any): Income;
    toJSON(message: Income): unknown;
    create<I extends {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & { [K in Exclude<keyof I, keyof Income>]: never; }>(base?: I | undefined): Income;
    fromPartial<I_1 extends {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & {
        Amount?: number | undefined;
        Currency?: string | undefined;
        Frequency?: IncomeFrequency | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Income>]: never; }>(object: I_1): Income;
};
export declare const EmployerContact: {
    encode(message: EmployerContact, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EmployerContact;
    fromJSON(object: any): EmployerContact;
    toJSON(message: EmployerContact): unknown;
    create<I extends {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EmployerContact>]: never; }>(base?: I | undefined): EmployerContact;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & {
        Name?: string | undefined;
        Email?: string | undefined;
        Phone?: string | undefined;
        Address?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof EmployerContact>]: never; }>(object: I_1): EmployerContact;
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
