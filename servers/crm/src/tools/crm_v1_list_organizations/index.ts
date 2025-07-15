import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_list_organizations",
  "toolDescription": "Listar empresas",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/organizations",
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
      "organization_segment": "organization_segment",
      "user_id": "user_id",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool