import { z } from "zod";
export const inputParams = {
    "applicability_scope": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `applicability_scope` to the tool, first call the tool `expandSchema` with \"/properties/filter/properties/applicability_scope\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "credit_grant": z.string().max(5000).optional(),
    "type": z.enum(["applicability_scope", "credit_grant"])
};
