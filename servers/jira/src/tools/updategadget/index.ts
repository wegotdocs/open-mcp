import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updategadget",
  "toolDescription": "Update gadget on dashboard",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}",
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
    "path": {
      "dashboardId": "dashboardId",
      "gadgetId": "gadgetId"
    },
    "body": {
      "color": "color",
      "position": "position",
      "title": "title"
    }
  },
  inputParamsSchema
}

export default tool