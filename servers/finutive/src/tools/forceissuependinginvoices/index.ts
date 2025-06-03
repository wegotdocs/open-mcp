import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "forceissuependinginvoices",
  "toolDescription": "Force issuance of late pending invoices",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/scripts/pending_invoices/issue/{pendingDate}",
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
    "path": {
      "pendingDate": "pendingDate"
    }
  },
  inputParamsSchema
}

export default tool