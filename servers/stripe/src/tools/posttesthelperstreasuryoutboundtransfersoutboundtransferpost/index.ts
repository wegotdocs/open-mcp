import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "posttesthelperstreasuryoutboundtransfersoutboundtransferpost",
  "toolDescription": "Test mode: Post an OutboundTransfer",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post",
  "method": "post",
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
      "outbound_transfer": "outbound_transfer"
    }
  },
  inputParamsSchema
}

export default tool