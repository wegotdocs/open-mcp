import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepriority",
  "toolDescription": "Update priority",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/priority/{id}",
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
      "id": "id"
    },
    "body": {
      "avatarId": "avatarId",
      "description": "description",
      "iconUrl": "iconUrl",
      "name": "name",
      "statusColor": "statusColor"
    }
  },
  inputParamsSchema
}

export default tool