import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "migrateinvoiceslines",
  "toolDescription": "Migrate Invoices Lines",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/migrations/invoices-lines",
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
      "ids": "ids",
      "thread": "thread",
      "batch": "batch"
    }
  },
  inputParamsSchema
}

export default tool