import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "payment_customer_create",
  "toolDescription": "Create",
  "baseUrl": "https://api.pluggy.ai",
  "path": "/payments/customers",
  "method": "post",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
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