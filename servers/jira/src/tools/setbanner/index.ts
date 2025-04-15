import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setbanner",
  "toolDescription": "Update announcement banner configuration",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/announcementBanner",
  "method": "put",
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
    "body": {
      "isDismissible": "isDismissible",
      "isEnabled": "isEnabled",
      "message": "message",
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool