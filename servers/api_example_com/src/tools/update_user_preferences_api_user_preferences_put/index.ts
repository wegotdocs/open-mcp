import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_user_preferences_api_user_preferences_put",
  "toolDescription": "Update User Preferences",
  "baseUrl": "https://api.example.com",
  "path": "/api/user/preferences",
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
      "theme": "theme",
      "language": "language",
      "timezone": "timezone",
      "dateFormat": "dateFormat",
      "timeFormat": "timeFormat",
      "defaultEnvironment": "defaultEnvironment",
      "dashboardRefreshInterval": "dashboardRefreshInterval",
      "defaultView": "defaultView",
      "showNotifications": "showNotifications",
      "emailNotifications": "emailNotifications",
      "slackNotifications": "slackNotifications",
      "alertThreshold": "alertThreshold",
      "sessionTimeout": "sessionTimeout",
      "codeTheme": "codeTheme",
      "gitBranch": "gitBranch",
      "autoSave": "autoSave",
      "customSettings": "customSettings"
    }
  },
  inputParamsSchema
}

export default tool