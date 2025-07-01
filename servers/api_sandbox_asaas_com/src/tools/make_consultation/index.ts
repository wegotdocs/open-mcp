import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "make_consultation",
  "toolDescription": "Make consultation",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/creditBureauReport",
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
    "body": {
      "customer": "customer",
      "cpfCnpj": "cpfCnpj"
    }
  },
  inputParamsSchema
}

export default tool