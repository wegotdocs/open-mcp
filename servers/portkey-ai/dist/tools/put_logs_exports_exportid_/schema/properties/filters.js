import { z } from "zod";
export const inputParams = {
    "time_of_generation_min": z.string().datetime({ offset: true }).optional(),
    "time_of_generation_max": z.string().datetime({ offset: true }).optional(),
    "total_units_min": z.number().int().optional(),
    "total_units_max": z.number().int().optional(),
    "cost_min": z.number().optional(),
    "cost_max": z.number().optional(),
    "ai_model": z.string().optional(),
    "prompt_token_min": z.number().int().optional(),
    "prompt_token_max": z.number().int().optional(),
    "completion_token_min": z.number().int().optional(),
    "completion_token_max": z.number().int().optional(),
    "status_code": z.string().optional(),
    "metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `metadata` to the tool, first call the tool `expandSchema` with \"/properties/filters/properties/metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
    "ai_org_model": z.string().optional(),
    "weighted_feedback_min": z.number().optional(),
    "weighted_feedback_max": z.number().optional(),
    "virtual_keys": z.string().optional(),
    "trace_id": z.string().optional(),
    "configs": z.string().optional(),
    "workspace_slug": z.string().optional(),
    "prompt_slug": z.string().optional()
};
