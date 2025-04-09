export { inputParams } from "./schema/root.js"

export const toolName = `get_analytics_groups_users`
export const toolDescription = `Get metadata users grouped data.`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/analytics/groups/users`
export const method = `get`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]
export const keys = {
  "query": [
    "time_of_generation_min",
    "time_of_generation_max",
    "total_units_min",
    "total_units_max",
    "cost_min",
    "cost_max",
    "prompt_token_min",
    "prompt_token_max",
    "completion_token_min",
    "completion_token_max",
    "status_code",
    "weighted_feedback_min",
    "weighted_feedback_max",
    "virtual_keys",
    "configs",
    "workspace_slug",
    "api_key_ids",
    "current_page",
    "page_size",
    "metadata",
    "ai_org_model",
    "trace_id",
    "span_id",
    "prompt_slug"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}