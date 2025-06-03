import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_recipient_update",
  "toolDescription": "Update",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/recipients/{id}",
  "method": "patch",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "taxNumber": "taxNumber",
      "name": "name",
      "paymentInstitutionId": "paymentInstitutionId",
      "account": "account",
      "pixKey": "pixKey"
    }
  },
  inputParamsSchema
}

export default tool