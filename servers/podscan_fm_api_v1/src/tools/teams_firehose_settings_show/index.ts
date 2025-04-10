export { inputParams } from "./schema/root.js"

export const toolName = `teams_firehose_settings_show`
export const toolDescription = `Get firehose settings`
export const baseUrl = `https://podscan.fm/api/v1`
export const path = `/teams/{teamId}/firehose/settings`
export const method = `get`
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
  "body": []
}
export const flatMap = {}