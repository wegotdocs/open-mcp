import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tokens_token_expiration",
  "toolDescription": "Expire a token",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/tokens/{token}/expiration",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {
    "body": {
      "id": "id",
      "method": "method",
      "paymentInstrument": "paymentInstrument",
      "fingerprint": "fingerprint",
      "billingAddress": "billingAddress",
      "_links": "_links"
    }
  },
  inputParamsSchema
}

export default tool