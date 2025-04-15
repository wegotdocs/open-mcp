import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createuser",
  "toolDescription": "Create user",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/user",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "body": {
      "applicationKeys": "applicationKeys",
      "displayName": "displayName",
      "emailAddress": "emailAddress",
      "key": "key",
      "name": "name",
      "password": "password",
      "products": "products",
      "self": "self"
    }
  },
  inputParamsSchema
}

export default tool