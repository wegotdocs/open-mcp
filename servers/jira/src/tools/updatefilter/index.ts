import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatefilter",
  "toolDescription": "Update filter",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/filter/{id}",
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
    "query": {
      "expand": "expand",
      "overrideSharePermissions": "overrideSharePermissions"
    },
    "body": {
      "approximateLastUsed": "approximateLastUsed",
      "description": "description",
      "editPermissions": "editPermissions",
      "favourite": "favourite",
      "favouritedCount": "favouritedCount",
      "id": "b_id",
      "jql": "jql",
      "name": "name",
      "owner": "owner",
      "searchUrl": "searchUrl",
      "self": "self",
      "sharePermissions": "sharePermissions",
      "sharedUsers": "sharedUsers",
      "subscriptions": "subscriptions",
      "viewUrl": "viewUrl"
    }
  },
  inputParamsSchema
}

export default tool