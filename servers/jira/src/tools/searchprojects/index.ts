import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchprojects",
  "toolDescription": "Get projects paginated",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/project/search",
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
      "startAt": "startAt",
      "maxResults": "maxResults",
      "orderBy": "orderBy",
      "id": "id",
      "keys": "keys",
      "query": "query",
      "typeKey": "typeKey",
      "categoryId": "categoryId",
      "action": "action",
      "expand": "expand",
      "status": "status",
      "properties": "properties",
      "propertyQuery": "propertyQuery"
    }
  },
  inputParamsSchema
}

export default tool