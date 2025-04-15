import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateissuetypescreenscheme",
  "toolDescription": "Update issue type screen scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issuetypescreenscheme/{issueTypeScreenSchemeId}",
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
      "issueTypeScreenSchemeId": "issueTypeScreenSchemeId"
    },
    "body": {
      "description": "description",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool