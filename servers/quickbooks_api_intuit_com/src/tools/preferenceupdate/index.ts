import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "preferenceupdate",
  "toolDescription": "Preference-Update",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/preferences",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "AccountingInfoPrefs": "AccountingInfoPrefs",
      "CurrencyPrefs": "CurrencyPrefs",
      "EmailMessagesPrefs": "EmailMessagesPrefs",
      "Id": "Id",
      "MetaData": "MetaData",
      "OtherPrefs": "OtherPrefs",
      "ProductAndServicesPrefs": "ProductAndServicesPrefs",
      "ReportPrefs": "ReportPrefs",
      "SalesFormsPrefs": "SalesFormsPrefs",
      "SyncToken": "SyncToken",
      "TaxPrefs": "TaxPrefs",
      "TimeTrackingPrefs": "TimeTrackingPrefs",
      "VendorAndPurchasesPrefs": "VendorAndPurchasesPrefs",
      "domain": "domain",
      "sparse": "sparse"
    }
  },
  inputParamsSchema
}

export default tool