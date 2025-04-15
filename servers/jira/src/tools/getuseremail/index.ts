import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getuseremail",
  "toolDescription": "Get user email",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/user/email",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "query": {
      "accountId": "accountId"
    }
  },
  inputParamsSchema
}

export default tool