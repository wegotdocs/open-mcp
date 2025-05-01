import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "taxservicecreate",
  "toolDescription": "TaxService-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/taxservice/taxcode",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "TaxCode": "TaxCode",
      "TaxRateDetails": "TaxRateDetails"
    }
  },
  inputParamsSchema
}

export default tool