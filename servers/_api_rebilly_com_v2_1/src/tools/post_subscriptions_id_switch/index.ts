import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_subscriptions_id_switch",
  "toolDescription": "Switch a subscription",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/subscriptions/{id}/switch",
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
      "planId": "planId",
      "policy": "policy",
      "websiteId": "websiteId",
      "quantity": "quantity"
    }
  },
  inputParamsSchema
}

export default tool