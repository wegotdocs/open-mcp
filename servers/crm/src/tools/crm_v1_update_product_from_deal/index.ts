import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "crm_v1_update_product_from_deal",
  "toolDescription": "Atualizar produto em negociação",
  "baseUrl": "https://crm.rdstation.com/api/v1",
  "path": "/deals/{deal_id}/deal_products/{deal_product_id}",
  "method": "put",
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
      "amount": "amount",
      "discount": "discount",
      "discount_type": "discount_type",
      "price": "price",
      "product_id": "product_id",
      "recurrence": "recurrence"
    }
  },
  inputParamsSchema
}

export default tool