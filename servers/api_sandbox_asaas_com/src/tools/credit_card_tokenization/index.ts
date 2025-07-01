import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "credit_card_tokenization",
  "toolDescription": "Credit card tokenization",
  "baseUrl": "https://api-sandbox.asaas.com",
  "path": "/v3/creditCard/tokenizeCreditCard",
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
      "creditCard": "creditCard",
      "creditCardHolderInfo": "creditCardHolderInfo",
      "remoteIp": "remoteIp"
    }
  },
  inputParamsSchema
}

export default tool