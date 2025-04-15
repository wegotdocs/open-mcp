import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmypermissions",
  "toolDescription": "Get my permissions",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/mypermissions",
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
      "projectKey": "projectKey",
      "projectId": "projectId",
      "issueKey": "issueKey",
      "issueId": "issueId",
      "permissions": "permissions",
      "projectUuid": "projectUuid",
      "projectConfigurationUuid": "projectConfigurationUuid",
      "commentId": "commentId"
    }
  },
  inputParamsSchema
}

export default tool