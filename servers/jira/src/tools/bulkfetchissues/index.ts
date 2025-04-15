import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulkfetchissues",
  "toolDescription": "Bulk fetch issues",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/bulkfetch",
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
      "issueIdsOrKeys": "issueIdsOrKeys",
      "properties": "properties"
    }
  },
  inputParamsSchema
}

export default tool