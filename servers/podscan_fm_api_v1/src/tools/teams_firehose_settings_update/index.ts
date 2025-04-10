export { inputParams } from "./schema/root.js"

export const toolName = `teams_firehose_settings_update`
export const toolDescription = `Update firehose settings`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{teamId}/firehose/settings`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "teamId"
  ],
  "cookie": [],
  "body": [
    "enabled",
    "webhook_url",
    "compression_enabled",
    "include_entities",
    "include_topics",
    "include_extraction",
    "restricted_to",
    "blocked"
  ]
}
export const flatMap = {}