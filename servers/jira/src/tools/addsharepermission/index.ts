import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addsharepermission",
  "toolDescription": "Add share permission",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/filter/{id}/permission",
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
      "id": "id"
    },
    "body": {
      "accountId": "accountId",
      "groupId": "groupId",
      "groupname": "groupname",
      "projectId": "projectId",
      "projectRoleId": "projectRoleId",
      "rights": "rights",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool