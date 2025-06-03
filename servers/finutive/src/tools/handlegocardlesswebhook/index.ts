import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handlegocardlesswebhook",
  "toolDescription": "Handle GoCardless webhook",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/webhook/gocardless",
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
    "header": {
      "Webhook-Signature": "Webhook-Signature"
    }
  },
  inputParamsSchema
}

export default tool