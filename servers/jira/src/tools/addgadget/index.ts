import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addgadget",
  "toolDescription": "Add gadget to dashboard",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/dashboard/{dashboardId}/gadget",
  "method": "post",
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
      "dashboardId": "dashboardId"
    },
    "body": {
      "color": "color",
      "ignoreUriAndModuleKeyValidation": "ignoreUriAndModuleKeyValidation",
      "moduleKey": "moduleKey",
      "position": "position",
      "title": "title",
      "uri": "uri"
    }
  },
  inputParamsSchema
}

export default tool