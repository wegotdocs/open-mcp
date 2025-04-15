import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "assignissuetypeschemetoproject",
  "toolDescription": "Assign issue type scheme to project",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuetypescheme/project",
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
    "body": {
      "issueTypeSchemeId": "issueTypeSchemeId",
      "projectId": "projectId"
    }
  },
  inputParamsSchema
}

export default tool