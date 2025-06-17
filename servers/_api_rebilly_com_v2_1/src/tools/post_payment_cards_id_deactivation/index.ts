import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_payment_cards_id_deactivation",
  "toolDescription": "Deactivate a Payment Card",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/payment-cards/{id}/deactivation",
  "method": "post",
  "security": [
    {
      "key": "REB-APIKEY",
      "value": "<mcp-env-var>REB_APIKEY</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_APIKEY"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool