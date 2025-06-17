import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "trentoweb_v1_settingscontroller_update_suse_manager_settings_4_",
  "toolDescription": "Updates the Suse manager settings",
  "baseUrl": "https://demo.trento-project.io",
  "path": "/api/v1/settings/suma_credentials",
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
      "ca_cert": "ca_cert",
      "password": "password",
      "url": "url",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool