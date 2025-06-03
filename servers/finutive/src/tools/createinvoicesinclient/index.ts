import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinvoicesinclient",
  "toolDescription": "Create invoices in client",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/backoffice/internal-billing/invoices/client",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "body": {
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool