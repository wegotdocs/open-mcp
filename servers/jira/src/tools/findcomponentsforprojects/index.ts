import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findcomponentsforprojects",
  "toolDescription": "Find components for projects",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/component",
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
      "projectIdsOrKeys": "projectIdsOrKeys",
      "startAt": "startAt",
      "maxResults": "maxResults",
      "orderBy": "orderBy",
      "query": "query"
    }
  },
  inputParamsSchema
}

export default tool