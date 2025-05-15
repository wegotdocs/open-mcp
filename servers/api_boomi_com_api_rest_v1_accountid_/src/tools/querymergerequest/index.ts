import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "querymergerequest",
  "toolDescription": "Queries for a MergeRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/MergeRequest/query",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "QueryFilter": "QueryFilter"
    }
  },
  inputParamsSchema
}

export default tool