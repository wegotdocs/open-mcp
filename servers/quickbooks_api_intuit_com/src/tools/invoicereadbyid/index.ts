import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invoicereadbyid",
  "toolDescription": "Invoice-ReadById",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/invoice/{invoiceId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "invoiceId": "invoiceId"
    }
  },
  inputParamsSchema
}

export default tool