import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoicecreate",
  "toolDescription": "Invoice-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/invoice",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "operation": "operation",
      "minorversion": "minorversion"
    },
    "body": {
      "Id": "Id",
      "Line": "Line",
      "CustomerRef": "CustomerRef",
      "PaymentMethodRef": "PaymentMethodRef",
      "SyncToken": "SyncToken",
      "CurrencyRef": "CurrencyRef",
      "DocNumber": "DocNumber",
      "BillEmail": "BillEmail",
      "TxnDate": "TxnDate",
      "ShipFromAddr": "ShipFromAddr",
      "ShipDate": "ShipDate",
      "TrackingNum": "TrackingNum",
      "ClassRef": "ClassRef",
      "PrintStatus": "PrintStatus",
      "SalesTermRef": "SalesTermRef",
      "TxnSource": "TxnSource",
      "LinkedTxn": "LinkedTxn",
      "DepositToAccountRef": "DepositToAccountRef",
      "GlobalTaxCalculation": "GlobalTaxCalculation",
      "AllowOnlineACHPayment": "AllowOnlineACHPayment",
      "TransactionLocationType": "TransactionLocationType",
      "DueDate": "DueDate",
      "MetaData": "MetaData",
      "PrivateNote": "PrivateNote",
      "BillEmailCc": "BillEmailCc",
      "CustomerMemo": "CustomerMemo",
      "EmailStatus": "EmailStatus",
      "ExchangeRate": "ExchangeRate",
      "Deposit": "Deposit",
      "TxnTaxDetail": "TxnTaxDetail",
      "AllowOnlineCreditCardPayment": "AllowOnlineCreditCardPayment",
      "CustomField": "CustomField",
      "ShipAddr": "ShipAddr",
      "DepartmentRef": "DepartmentRef",
      "BillEmailBcc": "BillEmailBcc",
      "ShipMethodRef": "ShipMethodRef",
      "BillAddr": "BillAddr",
      "ApplyTaxAfterDiscount": "ApplyTaxAfterDiscount",
      "HomeBalance": "HomeBalance",
      "DeliveryInfo": "DeliveryInfo",
      "TotalAmt": "TotalAmt",
      "InvoiceLink": "InvoiceLink",
      "RecurDataRef": "RecurDataRef",
      "TaxExemptionRef": "TaxExemptionRef",
      "Balance": "Balance",
      "HomeTotalAmt": "HomeTotalAmt",
      "FreeFormAddress": "FreeFormAddress"
    }
  },
  inputParamsSchema
}

export default tool