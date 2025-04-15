import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchforissuesusingjqlpost",
  "toolDescription": "Search for issues using JQL (POST)",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/search",
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
    "body": {
      "expand": "expand",
      "fields": "fields",
      "fieldsByKeys": "fieldsByKeys",
      "jql": "jql",
      "maxResults": "maxResults",
      "properties": "properties",
      "startAt": "startAt",
      "validateQuery": "validateQuery"
    }
  },
  inputParamsSchema
}

export default tool