import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "billpaymentcreate",
  "toolDescription": "BillPayment-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/billpayment",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "CheckPayment": "CheckPayment",
      "Line": "Line",
      "PayType": "PayType",
      "PrivateNote": "PrivateNote",
      "TotalAmt": "TotalAmt",
      "VendorRef": "VendorRef"
    }
  },
  inputParamsSchema
}

export default tool