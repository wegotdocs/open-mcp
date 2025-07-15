import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_products_from_deal",
  "toolDescription": "Atualizar produtos em massa em negociação",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals/{deal_id}/deal_products/batch/update",
  "method": "patch",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "deal_products": "deal_products"
    }
  },
  inputParamsSchema
}

export default tool