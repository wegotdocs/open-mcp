import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getoptionsforcontext",
  "toolDescription": "Get custom field options (context)",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/field/{fieldId}/context/{contextId}/option",
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
    "path": {
      "fieldId": "fieldId",
      "contextId": "contextId"
    },
    "query": {
      "optionId": "optionId",
      "onlyOptions": "onlyOptions",
      "startAt": "startAt",
      "maxResults": "maxResults"
    }
  },
  inputParamsSchema
}

export default tool