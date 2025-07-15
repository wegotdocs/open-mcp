import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_sources",
  "toolDescription": "Listar fontes",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_sources",
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