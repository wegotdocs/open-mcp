export { inputParams } from "./schema/root.js"

export const toolName = `tci_execute`
export const toolDescription = `Executes the given code snippet and returns the output. Without a session_id, a new session will be created to run the code. If you do pass in a valid session_id, the code will be run in that session. This is useful for running multiple cod`
export const baseUrl = `https://api.together.xyz/v1`
export const path = `/tci/execute`
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
    "code",
    "language",
    "session_id"
  ]
}
export const flatMap = {}