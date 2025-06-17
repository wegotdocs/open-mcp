import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_settingscontroller_update_api_key_settings",
  "toolDescription": "Updates the Api key settings",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/settings/api_key",
  "method": "patch",
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
      "expire_at": "expire_at"
    }
  },
  inputParamsSchema
}

export default tool