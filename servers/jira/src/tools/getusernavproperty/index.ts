import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusernavproperty",
  "toolDescription": "Get user nav property",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/user/nav4-opt-property/{propertyKey}",
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
      "propertyKey": "propertyKey"
    },
    "query": {
      "accountId": "accountId"
    }
  },
  inputParamsSchema
}

export default tool