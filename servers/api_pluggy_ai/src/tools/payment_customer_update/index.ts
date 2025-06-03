import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_customer_update",
  "toolDescription": "Update",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/customers/{id}",
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
      "id": "b_id",
      "type": "type",
      "name": "name",
      "email": "email",
      "cpf": "cpf",
      "cnpj": "cnpj"
    }
  },
  inputParamsSchema
}

export default tool