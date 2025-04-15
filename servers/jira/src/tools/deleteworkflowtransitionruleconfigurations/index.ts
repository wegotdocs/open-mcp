import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteworkflowtransitionruleconfigurations",
  "toolDescription": "Delete workflow transition rule configurations",
  "baseUrl": "https://your-domain.atlassian.net",
  "path": "/rest/api/3/workflow/rule/config/delete",
  "method": "put",
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
      "workflows": "workflows"
    }
  },
  inputParamsSchema
}

export default tool