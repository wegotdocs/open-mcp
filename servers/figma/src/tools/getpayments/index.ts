import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpayments",
  "toolDescription": "Get payments",
  "baseUrl": "https://api.figma.com",
  "path": "/v1/payments",
  "method": "get",
  "security": [
    {
      "key": "X-Figma-Token",
      "value": "<mcp-env-var>X_FIGMA_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "X_FIGMA_TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "plugin_payment_token": "plugin_payment_token",
      "user_id": "user_id",
      "community_file_id": "community_file_id",
      "plugin_id": "plugin_id",
      "widget_id": "widget_id"
    }
  },
  inputParamsSchema
}

export default tool