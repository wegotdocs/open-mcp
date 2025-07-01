import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_customers",
  "toolDescription": "List customers",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/customers",
  "method": "get",
  "security": [
    {
      "key": "access_token",
      "value": "<mcp-env-var>ACCESS_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "ACCESS_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "offset": "offset",
      "limit": "limit",
      "name": "name",
      "email": "email",
      "cpfCnpj": "cpfCnpj",
      "groupName": "groupName",
      "externalReference": "externalReference"
    }
  },
  inputParamsSchema
}

export default tool