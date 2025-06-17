import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tokens",
  "toolDescription": "Create a payment token",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/tokens",
  "method": "post",
  "security": [
    {
      "key": "REB-AUTH",
      "value": "<mcp-env-var>REB_AUTH</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_AUTH"
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