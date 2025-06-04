import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatechannelsettings",
  "toolDescription": "Update channel settings",
  "baseUrl": "https://gate.whapi.cloud/",
  "path": "/settings",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "query",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "body": {
      "callback_backoff_delay_ms": "callback_backoff_delay_ms",
      "max_callback_backoff_delay_ms": "max_callback_backoff_delay_ms",
      "callback_persist": "callback_persist",
      "media": "media",
      "webhooks": "webhooks",
      "proxy": "proxy",
      "mobile_proxy": "mobile_proxy",
      "offline_mode": "offline_mode",
      "full_history": "full_history"
    }
  },
  inputParamsSchema
}

export default tool