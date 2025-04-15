import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "postcharges",
  "toolDescription": "<p>This method is no longer recommended—use the <a href=\"/docs/api/payment_intents\">Payment Intents API</a>\nto initiate a new payment instead. Confirmation of the PaymentIntent creates the <code>Charge</code>\nobject used to request payment.",
  "baseUrl": "https://api.stripe.com",
  "path": "/v1/charges",
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
  "paramsMap": {},
  inputParamsSchema
}

export default tool