import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteandreplaceversion",
  "toolDescription": "Delete and replace version",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/version/{id}/removeAndSwap",
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
    "path": {
      "id": "id"
    },
    "body": {
      "customFieldReplacementList": "customFieldReplacementList",
      "moveAffectedIssuesTo": "moveAffectedIssuesTo",
      "moveFixIssuesTo": "moveFixIssuesTo"
    }
  },
  inputParamsSchema
}

export default tool