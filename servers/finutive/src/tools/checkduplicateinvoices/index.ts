import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkduplicateinvoices",
  "toolDescription": "Check for duplicate invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/instance/check_duplicate_invoices",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "query": {
      "startDate": "startDate",
      "endDate": "endDate"
    }
  },
  inputParamsSchema
}

export default tool