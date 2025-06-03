import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setofficial",
  "toolDescription": "Change if is an official invoice or not",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{businessId}/invoices/{invoiceId}/official",
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
    "path": {
      "businessId": "businessId",
      "invoiceId": "invoiceId"
    },
    "body": {
      "is_official": "is_official"
    }
  },
  inputParamsSchema
}

export default tool