import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcomponentdiffrequest",
  "toolDescription": "Creates a ComponentDiffRequest object",
  "baseUrl": "https://api.boomi.com/api/rest/v1/{accountId}",
  "path": "/ComponentDiffRequest",
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
      "CompDiffConfig": "CompDiffConfig",
      "componentId": "componentId",
      "sourceVersion": "sourceVersion",
      "targetVersion": "targetVersion"
    }
  },
  inputParamsSchema
}

export default tool