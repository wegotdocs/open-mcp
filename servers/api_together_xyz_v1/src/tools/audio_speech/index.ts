export { inputParams } from "./schema/root.js"

export const toolName = `audio_speech`
export const toolDescription = `Create audio generation request`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/audio/speech`
export const method = `post`
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
  "path": [],
  "cookie": [],
  "body": [
    "model",
    "input",
    "voice",
    "response_format",
    "language",
    "response_encoding",
    "sample_rate",
    "stream"
  ]
}
export const flatMap = {}