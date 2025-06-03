import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createrectifyinginternalbilling",
  "toolDescription": "Create rectifying internal billing",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/businesses/{business_id}/internal-billing/{internal_billing_id}/rectifying",
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
      "price": "price",
      "vat_percentage": "vat_percentage",
      "discount_type": "discount_type",
      "discount": "discount",
      "date": "date",
      "rectification_reason": "rectification_reason",
      "payment_method": "payment_method"
    }
  },
  inputParamsSchema
}

export default tool