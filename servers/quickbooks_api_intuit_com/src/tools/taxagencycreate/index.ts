import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "taxagencycreate",
  "toolDescription": "TaxAgency-Create",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/taxagency",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "DisplayName": "DisplayName"
    }
  },
  inputParamsSchema
}

export default tool