import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findusersandgroups",
  "toolDescription": "Find users and groups",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/groupuserpicker",
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
      "query": "query",
      "maxResults": "maxResults",
      "showAvatar": "showAvatar",
      "fieldId": "fieldId",
      "projectId": "projectId",
      "issueTypeId": "issueTypeId",
      "avatarSize": "avatarSize",
      "caseInsensitive": "caseInsensitive",
      "excludeConnectAddons": "excludeConnectAddons"
    }
  },
  inputParamsSchema
}

export default tool