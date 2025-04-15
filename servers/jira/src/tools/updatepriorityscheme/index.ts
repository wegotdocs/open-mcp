import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatepriorityscheme",
  "toolDescription": "Update priority scheme",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/priorityscheme/{schemeId}",
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
      "schemeId": "schemeId"
    },
    "body": {
      "defaultPriorityId": "defaultPriorityId",
      "description": "description",
      "mappings": "mappings",
      "name": "name",
      "priorities": "priorities",
      "projects": "projects"
    }
  },
  inputParamsSchema
}

export default tool