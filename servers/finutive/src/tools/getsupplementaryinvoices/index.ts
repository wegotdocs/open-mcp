import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsupplementaryinvoices",
  "toolDescription": "Get supplementary invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/invoices/supplementary",
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
      "search": "search",
      "emission_start_date": "emission_start_date",
      "emission_end_date": "emission_end_date",
      "register_start_date": "register_start_date",
      "register_end_date": "register_end_date",
      "status": "status",
      "type": "type",
      "start": "start",
      "length": "length"
    }
  },
  inputParamsSchema
}

export default tool