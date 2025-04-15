import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcreditnotespreview",
  "toolDescription": "Preview a credit note",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/credit_notes/preview",
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
    "query": {
      "amount": "amount",
      "credit_amount": "credit_amount",
      "effective_at": "effective_at",
      "email_type": "email_type",
      "expand": "expand",
      "invoice": "invoice",
      "lines": "lines",
      "memo": "memo",
      "metadata": "metadata",
      "out_of_band_amount": "out_of_band_amount",
      "reason": "reason",
      "refund_amount": "refund_amount",
      "refunds": "refunds",
      "shipping_cost": "shipping_cost"
    }
  },
  inputParamsSchema
}

export default tool