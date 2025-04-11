export { inputParams } from "./schema/root.js"

export const toolName = `alerts_active`
export const toolDescription = `Returns all currently active alerts`
export const baseUrl = `https://api.weather.gov`
export const path = `/alerts/active`
export const method = `get`
export const security = [
  {
    "key": "User-Agent",
    "value": "<mcp-env-var>USER_AGENT</mcp-env-var>",
    "in": "header",
    "envVarName": "USER_AGENT",
    "schemeType": "apiKey",
    "schemeName": "User-Agent"
  }
]
export const keys = {
  "query": [
    "status",
    "message_type",
    "event",
    "code",
    "area",
    "point",
    "region",
    "region_type",
    "zone",
    "urgency",
    "severity",
    "certainty",
    "limit"
  ],
  "header": [],
  "path": [],
  "cookie": [],
  "body": []
}
export const flatMap = {}