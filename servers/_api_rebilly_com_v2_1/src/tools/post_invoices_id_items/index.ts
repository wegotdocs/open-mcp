import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_invoices_id_items",
  "toolDescription": "Create an invoice item",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/invoices/{id}/items",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "type": "type",
      "unitPrice": "unitPrice",
      "quantity": "quantity",
      "productId": "productId",
      "description": "description",
      "discountAmount": "discountAmount",
      "periodStartTime": "periodStartTime",
      "periodEndTime": "periodEndTime",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool