import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_lost_reasons",
  "toolDescription": "Listar motivo da perda",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deal_lost_reasons",
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
      "q": "q",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool