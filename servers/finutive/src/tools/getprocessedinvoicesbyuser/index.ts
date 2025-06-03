import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprocessedinvoicesbyuser",
  "toolDescription": "Get processed invoices by user",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/admin/invoices/processed/user",
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
      "user_id": "user_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool