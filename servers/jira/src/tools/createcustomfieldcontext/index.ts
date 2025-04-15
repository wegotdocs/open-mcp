import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcustomfieldcontext",
  "toolDescription": "Create custom field context",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/field/{fieldId}/context",
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
      "fieldId": "fieldId"
    },
    "body": {
      "description": "description",
      "id": "id",
      "issueTypeIds": "issueTypeIds",
      "name": "name",
      "projectIds": "projectIds"
    }
  },
  inputParamsSchema
}

export default tool