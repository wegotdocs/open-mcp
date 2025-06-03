import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateinternalbilling",
  "toolDescription": "Update internal billing by id",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{business_id}/internal-billing/{internal_billing_id}",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id",
      "internal_billing_id": "internal_billing_id"
    },
    "body": {
      "payment_method": "payment_method",
      "price": "price",
      "discount_type": "discount_type",
      "discount": "discount",
      "responsable_id": "responsable_id"
    }
  },
  inputParamsSchema
}

export default tool