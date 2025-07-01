import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancel_an_invoice",
  "toolDescription": "Cancel an invoice",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/invoices/{id}/cancel",
  "method": "post",
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
      "id": "id"
    },
    "body": {
      "cancelOnlyOnAsaas": "cancelOnlyOnAsaas"
    }
  },
  inputParamsSchema
}

export default tool