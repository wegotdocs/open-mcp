import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulkconnector",
  "toolDescription": "Retrieves multiple Connector objects by identifier",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/Connector/bulk",
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
      "request": "request",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool