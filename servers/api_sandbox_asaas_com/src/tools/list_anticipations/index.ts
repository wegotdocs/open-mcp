import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_anticipations",
  "toolDescription": "List anticipations",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/anticipations",
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
      "payment": "payment",
      "installment": "installment",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool