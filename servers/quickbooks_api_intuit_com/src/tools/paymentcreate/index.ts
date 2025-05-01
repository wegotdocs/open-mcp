import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "paymentcreate",
  "toolDescription": "Payment-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/payment",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation"
    },
    "body": {
      "Id": "Id",
      "TotalAmt": "TotalAmt",
      "CustomerRef": "CustomerRef",
      "SyncToken": "SyncToken",
      "CurrencyRef": "CurrencyRef",
      "PrivateNote": "PrivateNote",
      "PaymentMethodRef": "PaymentMethodRef",
      "UnappliedAmt": "UnappliedAmt",
      "DepositToAccountRef": "DepositToAccountRef",
      "ExchangeRate": "ExchangeRate",
      "Line": "Line",
      "TxnSource": "TxnSource",
      "ARAccountRef": "ARAccountRef",
      "TxnDate": "TxnDate",
      "CreditCardPayment": "CreditCardPayment",
      "TransactionLocationType": "TransactionLocationType",
      "MetaData": "MetaData",
      "PaymentRefNum": "PaymentRefNum",
      "TaxExemptionRef": "TaxExemptionRef"
    }
  },
  inputParamsSchema
}

export default tool