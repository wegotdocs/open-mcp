import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "bulksetissueproperty",
  "toolDescription": "Bulk set issue property",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/issue/properties/{propertyKey}",
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
      "propertyKey": "propertyKey"
    },
    "body": {
      "expression": "expression",
      "filter": "filter",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool