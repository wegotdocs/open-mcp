import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "tci_execute",
  "toolDescription": "Executes the given code snippet and returns the output. Without a session_id, a new session will be created to run the code. If you do pass in a valid session_id, the code will be run in that session. This is useful for running multiple cod",
  "baseUrl": "https://api.together.xyz/v1",
  "path": "/tci/execute",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "code": "code",
      "files": "files",
      "language": "language",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool