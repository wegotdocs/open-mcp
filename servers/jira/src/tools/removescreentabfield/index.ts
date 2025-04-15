import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removescreentabfield",
  "toolDescription": "Remove screen tab field",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/screens/{screenId}/tabs/{tabId}/fields/{id}",
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
      "screenId": "screenId",
      "tabId": "tabId",
      "id": "id"
    }
  },
  inputParamsSchema
}

export default tool