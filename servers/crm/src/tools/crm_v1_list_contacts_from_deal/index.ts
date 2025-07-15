import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_contacts_from_deal",
  "toolDescription": "Listar contatos da negociação",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals/{deal_id}/contacts",
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
      "page": "page",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool