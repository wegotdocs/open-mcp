import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removenotificationfromnotificationscheme",
  "toolDescription": "Remove notification from notification scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/notificationscheme/{notificationSchemeId}/notification/{notificationId}",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "notificationSchemeId": "notificationSchemeId",
      "notificationId": "notificationId"
    }
  },
  inputParamsSchema
}

export default tool