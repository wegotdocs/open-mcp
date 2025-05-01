import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "refundreceiptcreate",
  "toolDescription": "RefundReceipt-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/refundreceipt",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "DepositToAccountRef": "DepositToAccountRef",
      "TxnDate": "TxnDate",
      "SyncToken": "SyncToken",
      "domain": "domain",
      "PaymentRefNum": "PaymentRefNum",
      "PrintStatus": "PrintStatus",
      "TotalAmt": "TotalAmt",
      "ClassRef": "ClassRef",
      "SalesTermRef": "SalesTermRef",
      "CustomerRef": "CustomerRef",
      "DocNumber": "DocNumber",
      "PrivateNote": "PrivateNote",
      "CustomerMemo": "CustomerMemo",
      "PaymentMethodRef": "PaymentMethodRef",
      "ShipAddr": "ShipAddr",
      "DepartmentRef": "DepartmentRef",
      "EmailStatus": "EmailStatus",
      "BillAddr": "BillAddr",
      "HomeBalance": "HomeBalance",
      "RemainingCredit": "RemainingCredit",
      "RecurDataRef": "RecurDataRef",
      "TaxExemptionRef": "TaxExemptionRef",
      "Balance": "Balance",
      "HomeTotalAmt": "HomeTotalAmt",
      "Line": "Line"
    }
  },
  inputParamsSchema
}

export default tool