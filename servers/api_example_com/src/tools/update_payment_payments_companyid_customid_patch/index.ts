import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_payment_payments_companyid_customid_patch",
  "toolDescription": "Update payment",
  "baseUrl": "https://api.example.com",
  "path": "/payments/{companyId}/{customId}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "customId": "customId",
      "companyId": "companyId"
    },
    "body": {
      "sync": "sync",
      "additionalInfo": "additionalInfo",
      "error": "error",
      "registered": "registered"
    }
  },
  inputParamsSchema
}

export default tool