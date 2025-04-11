export { inputParams } from "./schema/root.js"

export const toolName = `tafs`
export const toolDescription = `Returns Terminal Aerodrome Forecasts for the specified airport station.`
export const baseUrl = `https://api.weather.gov`
export const path = `/stations/{stationId}/tafs`
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
  "query": [],
  "header": [],
  "path": [
    "stationId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}