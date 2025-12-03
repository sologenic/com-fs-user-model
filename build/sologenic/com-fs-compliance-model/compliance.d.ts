import _m0 from "protobufjs/minimal";
import { Audit } from "../com-fs-utils-lib/models/audit/audit";
import { MetaData } from "../com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "compliance";
/** Questionnaire types */
export declare enum QuestionType {
    QUESTION_TYPE_DO_NOT_USE = 0,
    QUESTION_TYPE_RADIO = 1,
    /** QUESTION_TYPE_CHECKBOX - Can be multiple selections */
    QUESTION_TYPE_CHECKBOX = 2,
    QUESTION_TYPE_TEXT = 3,
    UNRECOGNIZED = -1
}
export declare function questionTypeFromJSON(object: any): QuestionType;
export declare function questionTypeToJSON(object: QuestionType): string;
export declare enum ResponseType {
    RESPONSE_TYPE_DO_NOT_USE = 0,
    RESPONSE_TYPE_INT = 1,
    RESPONSE_TYPE_STRING = 2,
    RESPONSE_TYPE_BOOLEAN = 3,
    UNRECOGNIZED = -1
}
export declare function responseTypeFromJSON(object: any): ResponseType;
export declare function responseTypeToJSON(object: ResponseType): string;
export declare enum Optionality {
    OPTIONALITY_NONE = 0,
    OPTIONALITY_OPTIONAL = 1,
    OPTIONALITY_REQUIRED = 2,
    /** OPTIONALITY_ON_BOOLEAN_TRUE - If the response type used is boolean, setting this to ON_BOOLEAN_TRUE gives the form implementer clear information on what to do if the boolean is true. */
    OPTIONALITY_ON_BOOLEAN_TRUE = 3,
    UNRECOGNIZED = -1
}
export declare function optionalityFromJSON(object: any): Optionality;
export declare function optionalityToJSON(object: Optionality): string;
export declare enum ComplianceStatus {
    COMPLIANCE_STATUS_DO_NOT_USE = 0,
    COMPLIANCE_STATUS_ACTIVE = 1,
    COMPLIANCE_STATUS_INACTIVE = 2,
    UNRECOGNIZED = -1
}
export declare function complianceStatusFromJSON(object: any): ComplianceStatus;
export declare function complianceStatusToJSON(object: ComplianceStatus): string;
export declare enum FormStatus {
    FORM_STATUS_DO_NOT_USE = 0,
    /** FORM_STATUS_SUBMITTED - Form has been submitted by the user */
    FORM_STATUS_SUBMITTED = 1,
    /** FORM_STATUS_RE_VALIDATE - Form needs to be re-validated by the user */
    FORM_STATUS_RE_VALIDATE = 2,
    /** FORM_STATUS_REJECTED - Form has been rejected by the admin for any reason, the user will have to update the form and resubmit it */
    FORM_STATUS_REJECTED = 3,
    UNRECOGNIZED = -1
}
export declare function formStatusFromJSON(object: any): FormStatus;
export declare function formStatusToJSON(object: FormStatus): string;
export interface Compliance {
    Compliance: ComplianceDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface ComplianceDetails {
    /** UUID */
    ComplianceID: string;
    ComplianceName: string;
    ComplianceDescription: string;
    /** UUID, if set the compliance is specific to an organization, otherwise it is global */
    OrganizationID?: string | undefined;
    /** Status of the compliance */
    Status: ComplianceStatus;
    Conditions: Condition[];
    Questions: Question[];
}
export interface ComplianceList {
    ComplianceList: Compliance[];
}
export interface Condition {
    /** For now country codes (ISO 3166-1 alpha-3) are supported */
    Jurisdiction: string;
}
export interface Question {
    Question: string;
    QuestionType: QuestionType;
    Required: boolean;
    ResponseType: ResponseType;
    Options: QuestionOption[];
    /** Order of the question in the questionnaire */
    QuestionIndex: number;
    File?: File | undefined;
}
export interface File {
    Description: string;
    Optionality: Optionality;
    /** Hash of the file content, used as file name in the file system */
    Hash?: string | undefined;
}
export interface QuestionOption {
    Label: string;
    /** Order of the option in the question */
    OptionIndex: number;
}
/** Compliance form answer structure */
export interface ComplianceFormAnswer {
    /** UUID - Reference to the compliance form */
    ComplianceID: string;
    /** Answers to individual questions */
    Answers: QuestionAnswer[];
    FormStatus: FormStatus;
    /** Timestamp of the submission, set by the backend when the form is submitted */
    SubmittedAt?: Date | undefined;
}
export interface QuestionAnswer {
    /** The question text (keeps structure consistent without the need to force static indexes of the question positions) */
    Question: string;
    /** Answer values - single value for radio/text, multiple for checkbox */
    Values: string[];
    /** Files attached to the answer, by repeating the description here, the answers can be rendered in the admin interface even if there are later updates to the questionnaire. */
    Files: File[];
}
export declare const Compliance: {
    encode(message: Compliance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Compliance;
    fromJSON(object: any): Compliance;
    toJSON(message: Compliance): unknown;
    create<I extends {
        Compliance?: {
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: {
                Jurisdiction?: string | undefined;
            }[] | undefined;
            Questions?: {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
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
        Compliance?: ({
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: {
                Jurisdiction?: string | undefined;
            }[] | undefined;
            Questions?: {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: ({
                Jurisdiction?: string | undefined;
            }[] & ({
                Jurisdiction?: string | undefined;
            } & {
                Jurisdiction?: string | undefined;
            } & { [K in Exclude<keyof I["Compliance"]["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_1 in Exclude<keyof I["Compliance"]["Conditions"], keyof {
                Jurisdiction?: string | undefined;
            }[]>]: never; }) | undefined;
            Questions?: ({
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] & ({
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            } & {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: ({
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] & ({
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                } & {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                } & { [K_2 in Exclude<keyof I["Compliance"]["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_3 in Exclude<keyof I["Compliance"]["Questions"][number]["Options"], keyof {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[]>]: never; }) | undefined;
                QuestionIndex?: number | undefined;
                File?: ({
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } & {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } & { [K_4 in Exclude<keyof I["Compliance"]["Questions"][number]["File"], keyof File>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["Compliance"]["Questions"][number], keyof Question>]: never; })[] & { [K_6 in Exclude<keyof I["Compliance"]["Questions"], keyof {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["Compliance"], keyof ComplianceDetails>]: never; }) | undefined;
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
        } & { [K_8 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_9 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, keyof Compliance>]: never; }>(base?: I | undefined): Compliance;
    fromPartial<I_1 extends {
        Compliance?: {
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: {
                Jurisdiction?: string | undefined;
            }[] | undefined;
            Questions?: {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
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
        Compliance?: ({
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: {
                Jurisdiction?: string | undefined;
            }[] | undefined;
            Questions?: {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            ComplianceID?: string | undefined;
            ComplianceName?: string | undefined;
            ComplianceDescription?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: ComplianceStatus | undefined;
            Conditions?: ({
                Jurisdiction?: string | undefined;
            }[] & ({
                Jurisdiction?: string | undefined;
            } & {
                Jurisdiction?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["Compliance"]["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_12 in Exclude<keyof I_1["Compliance"]["Conditions"], keyof {
                Jurisdiction?: string | undefined;
            }[]>]: never; }) | undefined;
            Questions?: ({
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[] & ({
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            } & {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: ({
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] & ({
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                } & {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                } & { [K_13 in Exclude<keyof I_1["Compliance"]["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_14 in Exclude<keyof I_1["Compliance"]["Questions"][number]["Options"], keyof {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[]>]: never; }) | undefined;
                QuestionIndex?: number | undefined;
                File?: ({
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } & {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } & { [K_15 in Exclude<keyof I_1["Compliance"]["Questions"][number]["File"], keyof File>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I_1["Compliance"]["Questions"][number], keyof Question>]: never; })[] & { [K_17 in Exclude<keyof I_1["Compliance"]["Questions"], keyof {
                Question?: string | undefined;
                QuestionType?: QuestionType | undefined;
                Required?: boolean | undefined;
                ResponseType?: ResponseType | undefined;
                Options?: {
                    Label?: string | undefined;
                    OptionIndex?: number | undefined;
                }[] | undefined;
                QuestionIndex?: number | undefined;
                File?: {
                    Description?: string | undefined;
                    Optionality?: Optionality | undefined;
                    Hash?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_18 in Exclude<keyof I_1["Compliance"], keyof ComplianceDetails>]: never; }) | undefined;
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
        } & { [K_19 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_20 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof Compliance>]: never; }>(object: I_1): Compliance;
};
export declare const ComplianceDetails: {
    encode(message: ComplianceDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComplianceDetails;
    fromJSON(object: any): ComplianceDetails;
    toJSON(message: ComplianceDetails): unknown;
    create<I extends {
        ComplianceID?: string | undefined;
        ComplianceName?: string | undefined;
        ComplianceDescription?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: ComplianceStatus | undefined;
        Conditions?: {
            Jurisdiction?: string | undefined;
        }[] | undefined;
        Questions?: {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        ComplianceID?: string | undefined;
        ComplianceName?: string | undefined;
        ComplianceDescription?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: ComplianceStatus | undefined;
        Conditions?: ({
            Jurisdiction?: string | undefined;
        }[] & ({
            Jurisdiction?: string | undefined;
        } & {
            Jurisdiction?: string | undefined;
        } & { [K in Exclude<keyof I["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_1 in Exclude<keyof I["Conditions"], keyof {
            Jurisdiction?: string | undefined;
        }[]>]: never; }) | undefined;
        Questions?: ({
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[] & ({
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        } & {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: ({
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] & ({
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            } & {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            } & { [K_2 in Exclude<keyof I["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_3 in Exclude<keyof I["Questions"][number]["Options"], keyof {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[]>]: never; }) | undefined;
            QuestionIndex?: number | undefined;
            File?: ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & { [K_4 in Exclude<keyof I["Questions"][number]["File"], keyof File>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["Questions"][number], keyof Question>]: never; })[] & { [K_6 in Exclude<keyof I["Questions"], keyof {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof ComplianceDetails>]: never; }>(base?: I | undefined): ComplianceDetails;
    fromPartial<I_1 extends {
        ComplianceID?: string | undefined;
        ComplianceName?: string | undefined;
        ComplianceDescription?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: ComplianceStatus | undefined;
        Conditions?: {
            Jurisdiction?: string | undefined;
        }[] | undefined;
        Questions?: {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        ComplianceID?: string | undefined;
        ComplianceName?: string | undefined;
        ComplianceDescription?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: ComplianceStatus | undefined;
        Conditions?: ({
            Jurisdiction?: string | undefined;
        }[] & ({
            Jurisdiction?: string | undefined;
        } & {
            Jurisdiction?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_9 in Exclude<keyof I_1["Conditions"], keyof {
            Jurisdiction?: string | undefined;
        }[]>]: never; }) | undefined;
        Questions?: ({
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[] & ({
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        } & {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: ({
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] & ({
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            } & {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            } & { [K_10 in Exclude<keyof I_1["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_11 in Exclude<keyof I_1["Questions"][number]["Options"], keyof {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[]>]: never; }) | undefined;
            QuestionIndex?: number | undefined;
            File?: ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["Questions"][number]["File"], keyof File>]: never; }) | undefined;
        } & { [K_13 in Exclude<keyof I_1["Questions"][number], keyof Question>]: never; })[] & { [K_14 in Exclude<keyof I_1["Questions"], keyof {
            Question?: string | undefined;
            QuestionType?: QuestionType | undefined;
            Required?: boolean | undefined;
            ResponseType?: ResponseType | undefined;
            Options?: {
                Label?: string | undefined;
                OptionIndex?: number | undefined;
            }[] | undefined;
            QuestionIndex?: number | undefined;
            File?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof ComplianceDetails>]: never; }>(object: I_1): ComplianceDetails;
};
export declare const ComplianceList: {
    encode(message: ComplianceList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComplianceList;
    fromJSON(object: any): ComplianceList;
    toJSON(message: ComplianceList): unknown;
    create<I extends {
        ComplianceList?: {
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[] | undefined;
    } & {
        ComplianceList?: ({
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[] & ({
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
            Compliance?: ({
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: ({
                    Jurisdiction?: string | undefined;
                }[] & ({
                    Jurisdiction?: string | undefined;
                } & {
                    Jurisdiction?: string | undefined;
                } & { [K in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_1 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Conditions"], keyof {
                    Jurisdiction?: string | undefined;
                }[]>]: never; }) | undefined;
                Questions?: ({
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] & ({
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                } & {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: ({
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] & ({
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    } & {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    } & { [K_2 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_3 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Questions"][number]["Options"], keyof {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[]>]: never; }) | undefined;
                    QuestionIndex?: number | undefined;
                    File?: ({
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } & {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Questions"][number]["File"], keyof File>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Questions"][number], keyof Question>]: never; })[] & { [K_6 in Exclude<keyof I["ComplianceList"][number]["Compliance"]["Questions"], keyof {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["ComplianceList"][number]["Compliance"], keyof ComplianceDetails>]: never; }) | undefined;
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
            } & { [K_8 in Exclude<keyof I["ComplianceList"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_9 in Exclude<keyof I["ComplianceList"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I["ComplianceList"][number], keyof Compliance>]: never; })[] & { [K_11 in Exclude<keyof I["ComplianceList"], keyof {
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, "ComplianceList">]: never; }>(base?: I | undefined): ComplianceList;
    fromPartial<I_1 extends {
        ComplianceList?: {
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[] | undefined;
    } & {
        ComplianceList?: ({
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[] & ({
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
            Compliance?: ({
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: ({
                    Jurisdiction?: string | undefined;
                }[] & ({
                    Jurisdiction?: string | undefined;
                } & {
                    Jurisdiction?: string | undefined;
                } & { [K_13 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Conditions"][number], "Jurisdiction">]: never; })[] & { [K_14 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Conditions"], keyof {
                    Jurisdiction?: string | undefined;
                }[]>]: never; }) | undefined;
                Questions?: ({
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] & ({
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                } & {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: ({
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] & ({
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    } & {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    } & { [K_15 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Questions"][number]["Options"][number], keyof QuestionOption>]: never; })[] & { [K_16 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Questions"][number]["Options"], keyof {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[]>]: never; }) | undefined;
                    QuestionIndex?: number | undefined;
                    File?: ({
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } & {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } & { [K_17 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Questions"][number]["File"], keyof File>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Questions"][number], keyof Question>]: never; })[] & { [K_19 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"]["Questions"], keyof {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I_1["ComplianceList"][number]["Compliance"], keyof ComplianceDetails>]: never; }) | undefined;
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
            } & { [K_21 in Exclude<keyof I_1["ComplianceList"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["ComplianceList"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_23 in Exclude<keyof I_1["ComplianceList"][number], keyof Compliance>]: never; })[] & { [K_24 in Exclude<keyof I_1["ComplianceList"], keyof {
            Compliance?: {
                ComplianceID?: string | undefined;
                ComplianceName?: string | undefined;
                ComplianceDescription?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: ComplianceStatus | undefined;
                Conditions?: {
                    Jurisdiction?: string | undefined;
                }[] | undefined;
                Questions?: {
                    Question?: string | undefined;
                    QuestionType?: QuestionType | undefined;
                    Required?: boolean | undefined;
                    ResponseType?: ResponseType | undefined;
                    Options?: {
                        Label?: string | undefined;
                        OptionIndex?: number | undefined;
                    }[] | undefined;
                    QuestionIndex?: number | undefined;
                    File?: {
                        Description?: string | undefined;
                        Optionality?: Optionality | undefined;
                        Hash?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
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
        }[]>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I_1, "ComplianceList">]: never; }>(object: I_1): ComplianceList;
};
export declare const Condition: {
    encode(message: Condition, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Condition;
    fromJSON(object: any): Condition;
    toJSON(message: Condition): unknown;
    create<I extends {
        Jurisdiction?: string | undefined;
    } & {
        Jurisdiction?: string | undefined;
    } & { [K in Exclude<keyof I, "Jurisdiction">]: never; }>(base?: I | undefined): Condition;
    fromPartial<I_1 extends {
        Jurisdiction?: string | undefined;
    } & {
        Jurisdiction?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "Jurisdiction">]: never; }>(object: I_1): Condition;
};
export declare const Question: {
    encode(message: Question, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Question;
    fromJSON(object: any): Question;
    toJSON(message: Question): unknown;
    create<I extends {
        Question?: string | undefined;
        QuestionType?: QuestionType | undefined;
        Required?: boolean | undefined;
        ResponseType?: ResponseType | undefined;
        Options?: {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[] | undefined;
        QuestionIndex?: number | undefined;
        File?: {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } | undefined;
    } & {
        Question?: string | undefined;
        QuestionType?: QuestionType | undefined;
        Required?: boolean | undefined;
        ResponseType?: ResponseType | undefined;
        Options?: ({
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[] & ({
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        } & {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        } & { [K in Exclude<keyof I["Options"][number], keyof QuestionOption>]: never; })[] & { [K_1 in Exclude<keyof I["Options"], keyof {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[]>]: never; }) | undefined;
        QuestionIndex?: number | undefined;
        File?: ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & { [K_2 in Exclude<keyof I["File"], keyof File>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Question>]: never; }>(base?: I | undefined): Question;
    fromPartial<I_1 extends {
        Question?: string | undefined;
        QuestionType?: QuestionType | undefined;
        Required?: boolean | undefined;
        ResponseType?: ResponseType | undefined;
        Options?: {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[] | undefined;
        QuestionIndex?: number | undefined;
        File?: {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } | undefined;
    } & {
        Question?: string | undefined;
        QuestionType?: QuestionType | undefined;
        Required?: boolean | undefined;
        ResponseType?: ResponseType | undefined;
        Options?: ({
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[] & ({
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        } & {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["Options"][number], keyof QuestionOption>]: never; })[] & { [K_5 in Exclude<keyof I_1["Options"], keyof {
            Label?: string | undefined;
            OptionIndex?: number | undefined;
        }[]>]: never; }) | undefined;
        QuestionIndex?: number | undefined;
        File?: ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["File"], keyof File>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Question>]: never; }>(object: I_1): Question;
};
export declare const File: {
    encode(message: File, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): File;
    fromJSON(object: any): File;
    toJSON(message: File): unknown;
    create<I extends {
        Description?: string | undefined;
        Optionality?: Optionality | undefined;
        Hash?: string | undefined;
    } & {
        Description?: string | undefined;
        Optionality?: Optionality | undefined;
        Hash?: string | undefined;
    } & { [K in Exclude<keyof I, keyof File>]: never; }>(base?: I | undefined): File;
    fromPartial<I_1 extends {
        Description?: string | undefined;
        Optionality?: Optionality | undefined;
        Hash?: string | undefined;
    } & {
        Description?: string | undefined;
        Optionality?: Optionality | undefined;
        Hash?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof File>]: never; }>(object: I_1): File;
};
export declare const QuestionOption: {
    encode(message: QuestionOption, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuestionOption;
    fromJSON(object: any): QuestionOption;
    toJSON(message: QuestionOption): unknown;
    create<I extends {
        Label?: string | undefined;
        OptionIndex?: number | undefined;
    } & {
        Label?: string | undefined;
        OptionIndex?: number | undefined;
    } & { [K in Exclude<keyof I, keyof QuestionOption>]: never; }>(base?: I | undefined): QuestionOption;
    fromPartial<I_1 extends {
        Label?: string | undefined;
        OptionIndex?: number | undefined;
    } & {
        Label?: string | undefined;
        OptionIndex?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QuestionOption>]: never; }>(object: I_1): QuestionOption;
};
export declare const ComplianceFormAnswer: {
    encode(message: ComplianceFormAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ComplianceFormAnswer;
    fromJSON(object: any): ComplianceFormAnswer;
    toJSON(message: ComplianceFormAnswer): unknown;
    create<I extends {
        ComplianceID?: string | undefined;
        Answers?: {
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        FormStatus?: FormStatus | undefined;
        SubmittedAt?: Date | undefined;
    } & {
        ComplianceID?: string | undefined;
        Answers?: ({
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[] & ({
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        } & {
            Question?: string | undefined;
            Values?: (string[] & string[] & { [K in Exclude<keyof I["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
            Files?: ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] & ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & { [K_1 in Exclude<keyof I["Answers"][number]["Files"][number], keyof File>]: never; })[] & { [K_2 in Exclude<keyof I["Answers"][number]["Files"], keyof {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["Answers"][number], keyof QuestionAnswer>]: never; })[] & { [K_4 in Exclude<keyof I["Answers"], keyof {
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        FormStatus?: FormStatus | undefined;
        SubmittedAt?: Date | undefined;
    } & { [K_5 in Exclude<keyof I, keyof ComplianceFormAnswer>]: never; }>(base?: I | undefined): ComplianceFormAnswer;
    fromPartial<I_1 extends {
        ComplianceID?: string | undefined;
        Answers?: {
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        FormStatus?: FormStatus | undefined;
        SubmittedAt?: Date | undefined;
    } & {
        ComplianceID?: string | undefined;
        Answers?: ({
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[] & ({
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        } & {
            Question?: string | undefined;
            Values?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["Answers"][number]["Values"], keyof string[]>]: never; }) | undefined;
            Files?: ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] & ({
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["Answers"][number]["Files"][number], keyof File>]: never; })[] & { [K_8 in Exclude<keyof I_1["Answers"][number]["Files"], keyof {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["Answers"][number], keyof QuestionAnswer>]: never; })[] & { [K_10 in Exclude<keyof I_1["Answers"], keyof {
            Question?: string | undefined;
            Values?: string[] | undefined;
            Files?: {
                Description?: string | undefined;
                Optionality?: Optionality | undefined;
                Hash?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        FormStatus?: FormStatus | undefined;
        SubmittedAt?: Date | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof ComplianceFormAnswer>]: never; }>(object: I_1): ComplianceFormAnswer;
};
export declare const QuestionAnswer: {
    encode(message: QuestionAnswer, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuestionAnswer;
    fromJSON(object: any): QuestionAnswer;
    toJSON(message: QuestionAnswer): unknown;
    create<I extends {
        Question?: string | undefined;
        Values?: string[] | undefined;
        Files?: {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[] | undefined;
    } & {
        Question?: string | undefined;
        Values?: (string[] & string[] & { [K in Exclude<keyof I["Values"], keyof string[]>]: never; }) | undefined;
        Files?: ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[] & ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Files"][number], keyof File>]: never; })[] & { [K_2 in Exclude<keyof I["Files"], keyof {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QuestionAnswer>]: never; }>(base?: I | undefined): QuestionAnswer;
    fromPartial<I_1 extends {
        Question?: string | undefined;
        Values?: string[] | undefined;
        Files?: {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[] | undefined;
    } & {
        Question?: string | undefined;
        Values?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["Values"], keyof string[]>]: never; }) | undefined;
        Files?: ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[] & ({
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Files"][number], keyof File>]: never; })[] & { [K_6 in Exclude<keyof I_1["Files"], keyof {
            Description?: string | undefined;
            Optionality?: Optionality | undefined;
            Hash?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof QuestionAnswer>]: never; }>(object: I_1): QuestionAnswer;
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
