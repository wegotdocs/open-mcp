export { inputParams } from "./schema/root.js"

export const toolName = `get_audio_analysis`
export const toolDescription = `Get Track's Audio Analysis`
export const baseUrl = `https://api.spotify.com/v1`
export const path = `/audio-analysis/{id}`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]
export const keys = {
  "query": [],
  "header": [],
  "path": [
    "id"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}