import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfilterspaginated",
  "toolDescription": "Search for filters",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/filter/search",
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
      "filterName": "filterName",
      "accountId": "accountId",
      "owner": "owner",
      "groupname": "groupname",
      "groupId": "groupId",
      "projectId": "projectId",
      "id": "id",
      "orderBy": "orderBy",
      "startAt": "startAt",
      "maxResults": "maxResults",
      "expand": "expand",
      "overrideSharePermissions": "overrideSharePermissions",
      "isSubstringMatch": "isSubstringMatch"
    }
  },
  inputParamsSchema
}

export default tool