import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "exchangerategetdetails",
  "toolDescription": "ExchangeRate - GetDetails",
  "baseUrl": "https://quickbooks.api.intuit.com",
  "path": "/v3/company/{companyid}/exchangerate",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "sourcecurrencycode": "sourcecurrencycode",
      "asofdate": "asofdate"
    }
  },
  inputParamsSchema
}

export default tool