import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "purchaseorderreadbyid",
  "toolDescription": "PurchaseOrder-ReadById",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/purchaseorder/{purchaseOrderId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "purchaseOrderId": "purchaseOrderId"
    }
  },
  inputParamsSchema
}

export default tool