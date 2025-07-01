import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_document_from_a_payment",
  "toolDescription": "Delete document from a payment",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/payments/{id}/documents/{documentId}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool