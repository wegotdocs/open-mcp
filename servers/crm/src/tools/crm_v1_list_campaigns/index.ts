import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_campaigns",
  "toolDescription": "Listar campanhas",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/campaigns",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "limit": "limit",
      "page": "page",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool