import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_contacts",
  "toolDescription": "Listar contatos",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/contacts",
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
      "limit": "limit",
      "order": "order",
      "direction": "direction",
      "email": "email",
      "q": "q",
      "phone": "phone",
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool