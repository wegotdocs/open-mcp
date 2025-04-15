import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvalidprojectname",
  "toolDescription": "Get valid project name",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/projectvalidate/validProjectName",
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
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool