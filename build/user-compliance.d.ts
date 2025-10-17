import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "user";
export declare enum LiquidationImportance {
    VERY_IMPORTANT = 0,
    SOMEWHAT_IMPORTANT = 1,
    NOT_IMPORTANT = 2,
    NO_PREFERENCE = 3,
    UNRECOGNIZED = -1
}
export declare function liquidationImportanceFromJSON(object: any): LiquidationImportance;
export declare function liquidationImportanceToJSON(object: LiquidationImportance): string;
export declare enum RiskTolerance {
    CONSERVATIVE = 0,
    MODERATELY_CONSERVATIVE = 1,
    MODERATE = 2,
    MODERATELY_AGGRESSIVE = 3,
    SIGNIFICANT_RISK = 4,
    UNRECOGNIZED = -1
}
export declare function riskToleranceFromJSON(object: any): RiskTolerance;
export declare function riskToleranceToJSON(object: RiskTolerance): string;
export declare enum InvestmentObjective {
    INCOME = 0,
    BALANCED = 1,
    GROWTH_AND_INCOME = 2,
    SAFE_LONG_TERM_GROWTH = 3,
    GREATER_RISK_LONG_TERM_GROWTH = 4,
    SPECULATION = 5,
    UNRECOGNIZED = -1
}
export declare function investmentObjectiveFromJSON(object: any): InvestmentObjective;
export declare function investmentObjectiveToJSON(object: InvestmentObjective): string;
/** This model is open to having multiple questionaires with regards to compliance like MiFID, etc. */
export interface ComplianceQuestions {
    USA?: USA | undefined;
    AlpacaDisclosures?: AlpacaDisclosures | undefined;
}
export interface USA {
    RecordedAt: Date | undefined;
    YearsExperience: number;
    AnnualIncome: number;
    NetWorth: number;
    ConversionImportance: LiquidationImportance;
    Tolerance: RiskTolerance;
    Objective: InvestmentObjective;
}
export interface AlpacaDisclosures {
    RecordedAt: Date | undefined;
    IsControlPerson: boolean;
    IsAffiliatedExchangeOrFinra: boolean;
    IsPoliticallyExposed: boolean;
    ImmediateFamilyExposed: boolean;
}
export declare const ComplianceQuestions: {
    encode(message: ComplianceQuestions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComplianceQuestions;
    fromJSON(object: any): ComplianceQuestions;
    toJSON(message: ComplianceQuestions): unknown;
    create<I extends {
        USA?: {
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } | undefined;
        AlpacaDisclosures?: {
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } | undefined;
    } & {
        USA?: ({
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } & {
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } & { [K in Exclude<keyof I["USA"], keyof USA>]: never; }) | undefined;
        AlpacaDisclosures?: ({
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } & {
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["AlpacaDisclosures"], keyof AlpacaDisclosures>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ComplianceQuestions>]: never; }>(base?: I | undefined): ComplianceQuestions;
    fromPartial<I_1 extends {
        USA?: {
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } | undefined;
        AlpacaDisclosures?: {
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } | undefined;
    } & {
        USA?: ({
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } & {
            RecordedAt?: Date | undefined;
            YearsExperience?: number | undefined;
            AnnualIncome?: number | undefined;
            NetWorth?: number | undefined;
            ConversionImportance?: LiquidationImportance | undefined;
            Tolerance?: RiskTolerance | undefined;
            Objective?: InvestmentObjective | undefined;
        } & { [K_3 in Exclude<keyof I_1["USA"], keyof USA>]: never; }) | undefined;
        AlpacaDisclosures?: ({
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } & {
            RecordedAt?: Date | undefined;
            IsControlPerson?: boolean | undefined;
            IsAffiliatedExchangeOrFinra?: boolean | undefined;
            IsPoliticallyExposed?: boolean | undefined;
            ImmediateFamilyExposed?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I_1["AlpacaDisclosures"], keyof AlpacaDisclosures>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof ComplianceQuestions>]: never; }>(object: I_1): ComplianceQuestions;
};
export declare const USA: {
    encode(message: USA, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): USA;
    fromJSON(object: any): USA;
    toJSON(message: USA): unknown;
    create<I extends {
        RecordedAt?: Date | undefined;
        YearsExperience?: number | undefined;
        AnnualIncome?: number | undefined;
        NetWorth?: number | undefined;
        ConversionImportance?: LiquidationImportance | undefined;
        Tolerance?: RiskTolerance | undefined;
        Objective?: InvestmentObjective | undefined;
    } & {
        RecordedAt?: Date | undefined;
        YearsExperience?: number | undefined;
        AnnualIncome?: number | undefined;
        NetWorth?: number | undefined;
        ConversionImportance?: LiquidationImportance | undefined;
        Tolerance?: RiskTolerance | undefined;
        Objective?: InvestmentObjective | undefined;
    } & { [K in Exclude<keyof I, keyof USA>]: never; }>(base?: I | undefined): USA;
    fromPartial<I_1 extends {
        RecordedAt?: Date | undefined;
        YearsExperience?: number | undefined;
        AnnualIncome?: number | undefined;
        NetWorth?: number | undefined;
        ConversionImportance?: LiquidationImportance | undefined;
        Tolerance?: RiskTolerance | undefined;
        Objective?: InvestmentObjective | undefined;
    } & {
        RecordedAt?: Date | undefined;
        YearsExperience?: number | undefined;
        AnnualIncome?: number | undefined;
        NetWorth?: number | undefined;
        ConversionImportance?: LiquidationImportance | undefined;
        Tolerance?: RiskTolerance | undefined;
        Objective?: InvestmentObjective | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof USA>]: never; }>(object: I_1): USA;
};
export declare const AlpacaDisclosures: {
    encode(message: AlpacaDisclosures, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlpacaDisclosures;
    fromJSON(object: any): AlpacaDisclosures;
    toJSON(message: AlpacaDisclosures): unknown;
    create<I extends {
        RecordedAt?: Date | undefined;
        IsControlPerson?: boolean | undefined;
        IsAffiliatedExchangeOrFinra?: boolean | undefined;
        IsPoliticallyExposed?: boolean | undefined;
        ImmediateFamilyExposed?: boolean | undefined;
    } & {
        RecordedAt?: Date | undefined;
        IsControlPerson?: boolean | undefined;
        IsAffiliatedExchangeOrFinra?: boolean | undefined;
        IsPoliticallyExposed?: boolean | undefined;
        ImmediateFamilyExposed?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof AlpacaDisclosures>]: never; }>(base?: I | undefined): AlpacaDisclosures;
    fromPartial<I_1 extends {
        RecordedAt?: Date | undefined;
        IsControlPerson?: boolean | undefined;
        IsAffiliatedExchangeOrFinra?: boolean | undefined;
        IsPoliticallyExposed?: boolean | undefined;
        ImmediateFamilyExposed?: boolean | undefined;
    } & {
        RecordedAt?: Date | undefined;
        IsControlPerson?: boolean | undefined;
        IsAffiliatedExchangeOrFinra?: boolean | undefined;
        IsPoliticallyExposed?: boolean | undefined;
        ImmediateFamilyExposed?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AlpacaDisclosures>]: never; }>(object: I_1): AlpacaDisclosures;
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
