import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrateinvoices",
  "toolDescription": "Migrate Invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/invoicesFixType",
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
      "starting_page": "starting_page",
      "page_size": "page_size",
      "thread": "thread",
      "batch": "batch"
    }
  },
  inputParamsSchema
}

export default tool