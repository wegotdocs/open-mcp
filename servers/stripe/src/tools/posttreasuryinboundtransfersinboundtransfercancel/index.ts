import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "posttreasuryinboundtransfersinboundtransfercancel",
  "toolDescription": "Cancel an InboundTransfer",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel",
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
      "inbound_transfer": "inbound_transfer"
    }
  },
  inputParamsSchema
}

export default tool