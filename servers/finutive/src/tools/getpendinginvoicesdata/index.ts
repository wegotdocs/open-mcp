import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpendinginvoicesdata",
  "toolDescription": "Get data for pending invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/pending_invoices/data/all",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool