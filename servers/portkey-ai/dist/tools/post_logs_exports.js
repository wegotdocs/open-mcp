import { z } from "zod";
export const toolName = `post_logs_exports`;
export const toolDescription = `Create log export`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/logs/exports`;
export const method = `post`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "workspace_id",
        "filters",
        "requested_data"
    ]
};
export const flatMap = {};
export const inputParams = {
    "workspace_id": z.string().optional(),
    "filters": z.object({ "time_of_generation_min": z.string().datetime({ offset: true }).optional(), "time_of_generation_max": z.string().datetime({ offset: true }).optional(), "total_units_min": z.number().int().optional(), "total_units_max": z.number().int().optional(), "cost_min": z.number().optional(), "cost_max": z.number().optional(), "ai_model": z.string().optional(), "prompt_token_min": z.number().int().optional(), "prompt_token_max": z.number().int().optional(), "completion_token_min": z.number().int().optional(), "completion_token_max": z.number().int().optional(), "status_code": z.string().optional(), "metadata": z.record(z.any()).optional(), "ai_org_model": z.string().optional(), "weighted_feedback_min": z.number().optional(), "weighted_feedback_max": z.number().optional(), "virtual_keys": z.string().optional(), "trace_id": z.string().optional(), "configs": z.string().optional(), "workspace_slug": z.string().optional(), "prompt_slug": z.string().optional() }),
    "requested_data": z.array(z.enum(["id", "trace_id", "created_at", "request", "response", "is_success", "ai_org", "ai_model", "req_units", "res_units", "total_units", "request_url", "cost", "cost_currency", "response_time", "response_status_code", "mode", "config", "prompt_slug", "metadata"]))
};
