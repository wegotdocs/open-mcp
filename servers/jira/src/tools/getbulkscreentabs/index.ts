import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbulkscreentabs",
  "toolDescription": "Get bulk screen tabs",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/screens/tabs",
  "method": "get",
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
    "query": {
      "screenId": "screenId",
      "tabId": "tabId",
      "startAt": "startAt",
      "maxResult": "maxResult"
    }
  },
  inputParamsSchema
}

export default tool