import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "patch_payment_cards_id_",
  "toolDescription": "Update a payment card's cvv value with predefined ID",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards/{id}",
  "method": "patch",
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
      "cvv": "cvv"
    }
  },
  inputParamsSchema
}

export default tool