import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "sqliteexecute",
  "toolDescription": "Execute a single SQLite statement and return results",
  "baseUrl": "https://api.val.town",
  "path": "/v1/sqlite/execute",
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
      "statement": "statement"
    }
  },
  inputParamsSchema
}

export default tool