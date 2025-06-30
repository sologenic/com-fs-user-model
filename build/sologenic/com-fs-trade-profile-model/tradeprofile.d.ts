import _m0 from "protobufjs/minimal";
import { Audit } from "../com-fs-utils-lib/models/audit/audit";
import { MetaData } from "../com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "tradeprofile";
/** MAINTENANCE: THIS SHOULD BE UPDATED WHENEVER A NEW FIELD IS ADDED TO THE TRADE PROFILE */
export declare enum LockableField {
    LOCKABLE_FIELD_DO_NOT_USE = 0,
    IS_TRADING_ENABLED = 1,
    IS_ORDER_ACCEPTANCE_ENABLED = 2,
    IS_MARGIN_TRADING_ENABLED = 3,
    UNRECOGNIZED = -1
}
export declare function lockableFieldFromJSON(object: any): LockableField;
export declare function lockableFieldToJSON(object: LockableField): string;
/** Key: OrganizationID-Network */
export interface DefaultTradeProfile {
    DefaultValues: TradeProfileDetails | undefined;
    ControlMetadata: TradeProfileControlMetadata | undefined;
    OrganizationID?: string | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
/**
 * Trade profile details that are used in two ways:
 * 1. Default trade profile for an organization(DefaultValues)
 * 2. Embedded in a user's model for individual trade profile configuration
 */
export interface TradeProfileDetails {
    /** Boolean fields */
    IsTradingEnabled: boolean;
    /** If true, orders are accepted; if false, close and cancel Only */
    IsOrderAcceptanceEnabled: boolean;
    /** If true, enables margin trading (buying power); if false, trading is limited to cash position. */
    IsMarginTradingEnabled: boolean;
    /** If true, enables short selling */
    IsShortSellingEnabled: boolean;
    /** Dropdown selection fields */
    AggregateNotionalLimit: DropdownNumericValue | undefined;
    /** Maximum single order value - limits the total monetary value allowed per order */
    SingleOrderLimit: DropdownNumericValue | undefined;
    /** Maximum order quantity - limits the number of shares per order */
    MaxOrderQuantity: DropdownNumericValue | undefined;
    /** Numeric fields */
    AggressivePercentage: number;
    /** Maximum allowed share quantity as a percentage of the security's average daily volume. */
    SymbolGrossADVPercent: number;
    /** The maximum allowed deviation percentage from market price */
    PriceCheckDeviation: number;
    /** Duplicative order threshold - rejects repetitive orders of same type in same symbol */
    DuplicateOrderLimit: number;
    /** Risk based multiplier */
    RiskMultiplier: number;
<<<<<<< HEAD
=======
}
/** This is user mutable. User can change this limited only by the admin set configuration. */
export interface UserTradeProfile {
    /** If true, enables margin trading (buying power); if false, trading is limited to cash position. */
    IsMarginTradingEnabled: boolean;
    /** If true, enables short selling */
    IsShortSellingEnabled: boolean;
    /** Maximum single order value - limits the total monetary value allowed per order */
    SingleOrderLimit: number;
    /** Maximum order quantity - limits the number of shares per order */
    MaxOrderQuantity: number;
>>>>>>> db9c8c5 (added user trade profile property for the user)
}
export interface TradeProfileControlMetadata {
    LockedFields: LockableField[];
    /** Available options for dropdowns fields */
    AggregateNotionalLimitOptions: DropdownNumericValue[];
    SingleOrderLimitOptions: DropdownNumericValue[];
    MaxOrderQuantityOptions: DropdownNumericValue[];
    /** Min/Max constraints for numeric fields */
    AggressivePercentageConstraint: DecimalConstraint | undefined;
    SymbolGrossADVConstraint: DecimalConstraint | undefined;
    PriceCheckDeviationConstraint: DecimalConstraint | undefined;
    DuplicateOrderConstraint: IntConstraint | undefined;
    RiskMultiplierConstraint: DecimalConstraint | undefined;
}
export interface DropdownNumericValue {
    /** Numeric value (e.g. 1000) */
    Value: number;
    /** if true, the value must be greater than the Value value (e.g. > 1000) */
    IsGreaterThan?: boolean | undefined;
}
export interface DecimalConstraint {
    MinValue: number;
    MaxValue: number;
    /** Increment/decrement step size, e.g., 0.01(1%), 0.001(0.1%) */
    Step: number;
}
export interface IntConstraint {
    MinValue: number;
    MaxValue: number;
    /** Increment/decrement step size, e.g., 1, 5, 10 */
    Step: number;
}
export declare const DefaultTradeProfile: {
    encode(message: DefaultTradeProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DefaultTradeProfile;
    fromJSON(object: any): DefaultTradeProfile;
    toJSON(message: DefaultTradeProfile): unknown;
    create<I extends {
        DefaultValues?: {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } | undefined;
        ControlMetadata?: {
            LockedFields?: LockableField[] | undefined;
            AggregateNotionalLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            SingleOrderLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            MaxOrderQuantityOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            AggressivePercentageConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            SymbolGrossADVConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            PriceCheckDeviationConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            DuplicateOrderConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            RiskMultiplierConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
        } | undefined;
        OrganizationID?: string | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        DefaultValues?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K in Exclude<keyof I["DefaultValues"]["AggregateNotionalLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
            SingleOrderLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_1 in Exclude<keyof I["DefaultValues"]["SingleOrderLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
            MaxOrderQuantity?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_2 in Exclude<keyof I["DefaultValues"]["MaxOrderQuantity"], keyof DropdownNumericValue>]: never; }) | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & { [K_3 in Exclude<keyof I["DefaultValues"], keyof TradeProfileDetails>]: never; }) | undefined;
        ControlMetadata?: ({
            LockedFields?: LockableField[] | undefined;
            AggregateNotionalLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            SingleOrderLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            MaxOrderQuantityOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            AggressivePercentageConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            SymbolGrossADVConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            PriceCheckDeviationConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            DuplicateOrderConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            RiskMultiplierConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
        } & {
            LockedFields?: (LockableField[] & LockableField[] & { [K_4 in Exclude<keyof I["ControlMetadata"]["LockedFields"], keyof LockableField[]>]: never; }) | undefined;
            AggregateNotionalLimitOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_5 in Exclude<keyof I["ControlMetadata"]["AggregateNotionalLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_6 in Exclude<keyof I["ControlMetadata"]["AggregateNotionalLimitOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            SingleOrderLimitOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_7 in Exclude<keyof I["ControlMetadata"]["SingleOrderLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_8 in Exclude<keyof I["ControlMetadata"]["SingleOrderLimitOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            MaxOrderQuantityOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_9 in Exclude<keyof I["ControlMetadata"]["MaxOrderQuantityOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_10 in Exclude<keyof I["ControlMetadata"]["MaxOrderQuantityOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            AggressivePercentageConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_11 in Exclude<keyof I["ControlMetadata"]["AggressivePercentageConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            SymbolGrossADVConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_12 in Exclude<keyof I["ControlMetadata"]["SymbolGrossADVConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            PriceCheckDeviationConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_13 in Exclude<keyof I["ControlMetadata"]["PriceCheckDeviationConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            DuplicateOrderConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_14 in Exclude<keyof I["ControlMetadata"]["DuplicateOrderConstraint"], keyof IntConstraint>]: never; }) | undefined;
            RiskMultiplierConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_15 in Exclude<keyof I["ControlMetadata"]["RiskMultiplierConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["ControlMetadata"], keyof TradeProfileControlMetadata>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_17 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_18 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I, keyof DefaultTradeProfile>]: never; }>(base?: I | undefined): DefaultTradeProfile;
    fromPartial<I_1 extends {
        DefaultValues?: {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } | undefined;
        ControlMetadata?: {
            LockedFields?: LockableField[] | undefined;
            AggregateNotionalLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            SingleOrderLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            MaxOrderQuantityOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            AggressivePercentageConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            SymbolGrossADVConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            PriceCheckDeviationConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            DuplicateOrderConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            RiskMultiplierConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
        } | undefined;
        OrganizationID?: string | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        DefaultValues?: ({
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            SingleOrderLimit?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            MaxOrderQuantity?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & {
            IsTradingEnabled?: boolean | undefined;
            IsOrderAcceptanceEnabled?: boolean | undefined;
            IsMarginTradingEnabled?: boolean | undefined;
            IsShortSellingEnabled?: boolean | undefined;
            AggregateNotionalLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_20 in Exclude<keyof I_1["DefaultValues"]["AggregateNotionalLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
            SingleOrderLimit?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_21 in Exclude<keyof I_1["DefaultValues"]["SingleOrderLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
            MaxOrderQuantity?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_22 in Exclude<keyof I_1["DefaultValues"]["MaxOrderQuantity"], keyof DropdownNumericValue>]: never; }) | undefined;
            AggressivePercentage?: number | undefined;
            SymbolGrossADVPercent?: number | undefined;
            PriceCheckDeviation?: number | undefined;
            DuplicateOrderLimit?: number | undefined;
            RiskMultiplier?: number | undefined;
        } & { [K_23 in Exclude<keyof I_1["DefaultValues"], keyof TradeProfileDetails>]: never; }) | undefined;
        ControlMetadata?: ({
            LockedFields?: LockableField[] | undefined;
            AggregateNotionalLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            SingleOrderLimitOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            MaxOrderQuantityOptions?: {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] | undefined;
            AggressivePercentageConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            SymbolGrossADVConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            PriceCheckDeviationConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            DuplicateOrderConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
            RiskMultiplierConstraint?: {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } | undefined;
        } & {
            LockedFields?: (LockableField[] & LockableField[] & { [K_24 in Exclude<keyof I_1["ControlMetadata"]["LockedFields"], keyof LockableField[]>]: never; }) | undefined;
            AggregateNotionalLimitOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_25 in Exclude<keyof I_1["ControlMetadata"]["AggregateNotionalLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_26 in Exclude<keyof I_1["ControlMetadata"]["AggregateNotionalLimitOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            SingleOrderLimitOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_27 in Exclude<keyof I_1["ControlMetadata"]["SingleOrderLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_28 in Exclude<keyof I_1["ControlMetadata"]["SingleOrderLimitOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            MaxOrderQuantityOptions?: ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[] & ({
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            } & { [K_29 in Exclude<keyof I_1["ControlMetadata"]["MaxOrderQuantityOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_30 in Exclude<keyof I_1["ControlMetadata"]["MaxOrderQuantityOptions"], keyof {
                Value?: number | undefined;
                IsGreaterThan?: boolean | undefined;
            }[]>]: never; }) | undefined;
            AggressivePercentageConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_31 in Exclude<keyof I_1["ControlMetadata"]["AggressivePercentageConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            SymbolGrossADVConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_32 in Exclude<keyof I_1["ControlMetadata"]["SymbolGrossADVConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            PriceCheckDeviationConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_33 in Exclude<keyof I_1["ControlMetadata"]["PriceCheckDeviationConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
            DuplicateOrderConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_34 in Exclude<keyof I_1["ControlMetadata"]["DuplicateOrderConstraint"], keyof IntConstraint>]: never; }) | undefined;
            RiskMultiplierConstraint?: ({
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & {
                MinValue?: number | undefined;
                MaxValue?: number | undefined;
                Step?: number | undefined;
            } & { [K_35 in Exclude<keyof I_1["ControlMetadata"]["RiskMultiplierConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["ControlMetadata"], keyof TradeProfileControlMetadata>]: never; }) | undefined;
        OrganizationID?: string | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_37 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_38 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_39 in Exclude<keyof I_1, keyof DefaultTradeProfile>]: never; }>(object: I_1): DefaultTradeProfile;
};
export declare const TradeProfileDetails: {
    encode(message: TradeProfileDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeProfileDetails;
    fromJSON(object: any): TradeProfileDetails;
    toJSON(message: TradeProfileDetails): unknown;
    create<I extends {
        IsTradingEnabled?: boolean | undefined;
        IsOrderAcceptanceEnabled?: boolean | undefined;
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        AggregateNotionalLimit?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        SingleOrderLimit?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        MaxOrderQuantity?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        AggressivePercentage?: number | undefined;
        SymbolGrossADVPercent?: number | undefined;
        PriceCheckDeviation?: number | undefined;
        DuplicateOrderLimit?: number | undefined;
        RiskMultiplier?: number | undefined;
    } & {
        IsTradingEnabled?: boolean | undefined;
        IsOrderAcceptanceEnabled?: boolean | undefined;
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        AggregateNotionalLimit?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K in Exclude<keyof I["AggregateNotionalLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
        SingleOrderLimit?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["SingleOrderLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
        MaxOrderQuantity?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["MaxOrderQuantity"], keyof DropdownNumericValue>]: never; }) | undefined;
        AggressivePercentage?: number | undefined;
        SymbolGrossADVPercent?: number | undefined;
        PriceCheckDeviation?: number | undefined;
        DuplicateOrderLimit?: number | undefined;
        RiskMultiplier?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof TradeProfileDetails>]: never; }>(base?: I | undefined): TradeProfileDetails;
    fromPartial<I_1 extends {
        IsTradingEnabled?: boolean | undefined;
        IsOrderAcceptanceEnabled?: boolean | undefined;
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        AggregateNotionalLimit?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        SingleOrderLimit?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        MaxOrderQuantity?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } | undefined;
        AggressivePercentage?: number | undefined;
        SymbolGrossADVPercent?: number | undefined;
        PriceCheckDeviation?: number | undefined;
        DuplicateOrderLimit?: number | undefined;
        RiskMultiplier?: number | undefined;
    } & {
        IsTradingEnabled?: boolean | undefined;
        IsOrderAcceptanceEnabled?: boolean | undefined;
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        AggregateNotionalLimit?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_4 in Exclude<keyof I_1["AggregateNotionalLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
        SingleOrderLimit?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["SingleOrderLimit"], keyof DropdownNumericValue>]: never; }) | undefined;
        MaxOrderQuantity?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["MaxOrderQuantity"], keyof DropdownNumericValue>]: never; }) | undefined;
        AggressivePercentage?: number | undefined;
        SymbolGrossADVPercent?: number | undefined;
        PriceCheckDeviation?: number | undefined;
        DuplicateOrderLimit?: number | undefined;
        RiskMultiplier?: number | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof TradeProfileDetails>]: never; }>(object: I_1): TradeProfileDetails;
};
export declare const UserTradeProfile: {
    encode(message: UserTradeProfile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserTradeProfile;
    fromJSON(object: any): UserTradeProfile;
    toJSON(message: UserTradeProfile): unknown;
    create<I extends {
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        SingleOrderLimit?: number | undefined;
        MaxOrderQuantity?: number | undefined;
    } & {
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        SingleOrderLimit?: number | undefined;
        MaxOrderQuantity?: number | undefined;
    } & { [K in Exclude<keyof I, keyof UserTradeProfile>]: never; }>(base?: I | undefined): UserTradeProfile;
    fromPartial<I_1 extends {
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        SingleOrderLimit?: number | undefined;
        MaxOrderQuantity?: number | undefined;
    } & {
        IsMarginTradingEnabled?: boolean | undefined;
        IsShortSellingEnabled?: boolean | undefined;
        SingleOrderLimit?: number | undefined;
        MaxOrderQuantity?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UserTradeProfile>]: never; }>(object: I_1): UserTradeProfile;
};
export declare const TradeProfileControlMetadata: {
    encode(message: TradeProfileControlMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TradeProfileControlMetadata;
    fromJSON(object: any): TradeProfileControlMetadata;
    toJSON(message: TradeProfileControlMetadata): unknown;
    create<I extends {
        LockedFields?: LockableField[] | undefined;
        AggregateNotionalLimitOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        SingleOrderLimitOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        MaxOrderQuantityOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        AggressivePercentageConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        SymbolGrossADVConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        PriceCheckDeviationConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        DuplicateOrderConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        RiskMultiplierConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
    } & {
        LockedFields?: (LockableField[] & LockableField[] & { [K in Exclude<keyof I["LockedFields"], keyof LockableField[]>]: never; }) | undefined;
        AggregateNotionalLimitOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["AggregateNotionalLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_2 in Exclude<keyof I["AggregateNotionalLimitOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        SingleOrderLimitOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_3 in Exclude<keyof I["SingleOrderLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_4 in Exclude<keyof I["SingleOrderLimitOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        MaxOrderQuantityOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I["MaxOrderQuantityOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_6 in Exclude<keyof I["MaxOrderQuantityOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        AggressivePercentageConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_7 in Exclude<keyof I["AggressivePercentageConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        SymbolGrossADVConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_8 in Exclude<keyof I["SymbolGrossADVConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        PriceCheckDeviationConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_9 in Exclude<keyof I["PriceCheckDeviationConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        DuplicateOrderConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_10 in Exclude<keyof I["DuplicateOrderConstraint"], keyof IntConstraint>]: never; }) | undefined;
        RiskMultiplierConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_11 in Exclude<keyof I["RiskMultiplierConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof TradeProfileControlMetadata>]: never; }>(base?: I | undefined): TradeProfileControlMetadata;
    fromPartial<I_1 extends {
        LockedFields?: LockableField[] | undefined;
        AggregateNotionalLimitOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        SingleOrderLimitOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        MaxOrderQuantityOptions?: {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] | undefined;
        AggressivePercentageConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        SymbolGrossADVConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        PriceCheckDeviationConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        DuplicateOrderConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
        RiskMultiplierConstraint?: {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } | undefined;
    } & {
        LockedFields?: (LockableField[] & LockableField[] & { [K_13 in Exclude<keyof I_1["LockedFields"], keyof LockableField[]>]: never; }) | undefined;
        AggregateNotionalLimitOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_14 in Exclude<keyof I_1["AggregateNotionalLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_15 in Exclude<keyof I_1["AggregateNotionalLimitOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        SingleOrderLimitOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_16 in Exclude<keyof I_1["SingleOrderLimitOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_17 in Exclude<keyof I_1["SingleOrderLimitOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        MaxOrderQuantityOptions?: ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[] & ({
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        } & { [K_18 in Exclude<keyof I_1["MaxOrderQuantityOptions"][number], keyof DropdownNumericValue>]: never; })[] & { [K_19 in Exclude<keyof I_1["MaxOrderQuantityOptions"], keyof {
            Value?: number | undefined;
            IsGreaterThan?: boolean | undefined;
        }[]>]: never; }) | undefined;
        AggressivePercentageConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_20 in Exclude<keyof I_1["AggressivePercentageConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        SymbolGrossADVConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_21 in Exclude<keyof I_1["SymbolGrossADVConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        PriceCheckDeviationConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_22 in Exclude<keyof I_1["PriceCheckDeviationConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
        DuplicateOrderConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_23 in Exclude<keyof I_1["DuplicateOrderConstraint"], keyof IntConstraint>]: never; }) | undefined;
        RiskMultiplierConstraint?: ({
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & {
            MinValue?: number | undefined;
            MaxValue?: number | undefined;
            Step?: number | undefined;
        } & { [K_24 in Exclude<keyof I_1["RiskMultiplierConstraint"], keyof DecimalConstraint>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, keyof TradeProfileControlMetadata>]: never; }>(object: I_1): TradeProfileControlMetadata;
};
export declare const DropdownNumericValue: {
    encode(message: DropdownNumericValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DropdownNumericValue;
    fromJSON(object: any): DropdownNumericValue;
    toJSON(message: DropdownNumericValue): unknown;
    create<I extends {
        Value?: number | undefined;
        IsGreaterThan?: boolean | undefined;
    } & {
        Value?: number | undefined;
        IsGreaterThan?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof DropdownNumericValue>]: never; }>(base?: I | undefined): DropdownNumericValue;
    fromPartial<I_1 extends {
        Value?: number | undefined;
        IsGreaterThan?: boolean | undefined;
    } & {
        Value?: number | undefined;
        IsGreaterThan?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DropdownNumericValue>]: never; }>(object: I_1): DropdownNumericValue;
};
export declare const DecimalConstraint: {
    encode(message: DecimalConstraint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecimalConstraint;
    fromJSON(object: any): DecimalConstraint;
    toJSON(message: DecimalConstraint): unknown;
    create<I extends {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & { [K in Exclude<keyof I, keyof DecimalConstraint>]: never; }>(base?: I | undefined): DecimalConstraint;
    fromPartial<I_1 extends {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DecimalConstraint>]: never; }>(object: I_1): DecimalConstraint;
};
export declare const IntConstraint: {
    encode(message: IntConstraint, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntConstraint;
    fromJSON(object: any): IntConstraint;
    toJSON(message: IntConstraint): unknown;
    create<I extends {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & { [K in Exclude<keyof I, keyof IntConstraint>]: never; }>(base?: I | undefined): IntConstraint;
    fromPartial<I_1 extends {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & {
        MinValue?: number | undefined;
        MaxValue?: number | undefined;
        Step?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof IntConstraint>]: never; }>(object: I_1): IntConstraint;
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
