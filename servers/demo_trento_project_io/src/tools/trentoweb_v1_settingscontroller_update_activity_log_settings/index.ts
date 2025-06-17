import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_settingscontroller_update_activity_log_settings",
  "toolDescription": "Updates the Activity Log settings",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/settings/activity_log",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "retention_time": "retention_time"
    }
  },
  inputParamsSchema
}

export default tool