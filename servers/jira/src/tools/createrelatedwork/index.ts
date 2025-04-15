import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createrelatedwork",
  "toolDescription": "Create related work",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/version/{id}/relatedwork",
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
      "category": "category",
      "issueId": "issueId",
      "relatedWorkId": "relatedWorkId",
      "title": "title",
      "url": "url"
    }
  },
  inputParamsSchema
}

export default tool