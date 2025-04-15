import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchandreconsileissuesusingjql",
  "toolDescription": "Search for issues using JQL enhanced search (GET)",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/search/jql",
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
      "jql": "jql",
      "nextPageToken": "nextPageToken",
      "maxResults": "maxResults",
      "fields": "fields",
      "expand": "expand",
      "properties": "properties",
      "fieldsByKeys": "fieldsByKeys",
      "failFast": "failFast",
      "reconcileIssues": "reconcileIssues"
    }
  },
  inputParamsSchema
}

export default tool