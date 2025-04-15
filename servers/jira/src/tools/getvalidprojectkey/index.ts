import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvalidprojectkey",
  "toolDescription": "Get valid project key",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/projectvalidate/validProjectKey",
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
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool