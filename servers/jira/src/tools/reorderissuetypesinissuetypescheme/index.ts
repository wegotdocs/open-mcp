import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reorderissuetypesinissuetypescheme",
  "toolDescription": "Change order of issue types",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuetypescheme/{issueTypeSchemeId}/issuetype/move",
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
      "issueTypeSchemeId": "issueTypeSchemeId"
    },
    "body": {
      "after": "after",
      "issueTypeIds": "issueTypeIds",
      "position": "position"
    }
  },
  inputParamsSchema
}

export default tool