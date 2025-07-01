import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_settings_of_a_document_of_a_payment",
  "toolDescription": "Update settings of a document of a payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}/documents/{documentId}",
  "method": "put",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "documentId": "documentId"
    },
    "body": {
      "availableAfterPayment": "availableAfterPayment",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool