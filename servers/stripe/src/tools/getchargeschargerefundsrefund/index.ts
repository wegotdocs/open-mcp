import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchargeschargerefundsrefund",
  "toolDescription": "<p>Retrieves the details of an existing refund.</p>",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/charges/{charge}/refunds/{refund}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "charge": "charge",
      "refund": "refund"
    },
    "query": {
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool