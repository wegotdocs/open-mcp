import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteworklogproperty",
  "toolDescription": "Delete worklog property",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/{issueIdOrKey}/worklog/{worklogId}/properties/{propertyKey}",
  "method": "delete",
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
      "issueIdOrKey": "issueIdOrKey",
      "worklogId": "worklogId",
      "propertyKey": "propertyKey"
    }
  },
  inputParamsSchema
}

export default tool