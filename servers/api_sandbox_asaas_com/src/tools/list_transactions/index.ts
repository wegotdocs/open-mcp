import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_transactions",
  "toolDescription": "List transactions",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/pix/transactions",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit",
      "status": "status",
      "type": "type",
      "endToEndIdentifier": "endToEndIdentifier"
    }
  },
  inputParamsSchema
}

export default tool