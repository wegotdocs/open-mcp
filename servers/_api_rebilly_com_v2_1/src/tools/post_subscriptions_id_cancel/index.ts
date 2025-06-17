import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_subscriptions_id_cancel",
  "toolDescription": "Cancel a subscription",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/subscriptions/{id}/cancel",
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
      "policy": "policy",
      "canceledBy": "canceledBy",
      "cancelCategory": "cancelCategory",
      "cancelDescription": "cancelDescription"
    }
  },
  inputParamsSchema
}

export default tool