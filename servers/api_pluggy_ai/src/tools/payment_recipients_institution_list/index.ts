import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_recipients_institution_list",
  "toolDescription": "List Institutions",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/recipients/institutions",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "pageSize": "pageSize",
      "page": "page",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool