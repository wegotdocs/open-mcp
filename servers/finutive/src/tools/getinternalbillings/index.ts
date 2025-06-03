import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinternalbillings",
  "toolDescription": "Get internal billings with filters and pagination",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/internal-billing",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "businessId": "businessId",
      "startDate": "startDate",
      "endDate": "endDate",
      "discountType": "discountType",
      "serviceProductId": "serviceProductId",
      "serviceId": "serviceId",
      "paymentMethod": "paymentMethod",
      "paymentReferenceIsNull": "paymentReferenceIsNull",
      "invoiceIsNull": "invoiceIsNull",
      "clientInvoiceIsNull": "clientInvoiceIsNull",
      "invoiceId": "invoiceId",
      "page": "page",
      "size": "size",
      "sort": "sort"
    }
  },
  inputParamsSchema
}

export default tool