import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_account",
  "toolDescription": "Create Account",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/admin/account",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "user": "user",
      "scope": "scope"
    }
  },
  inputParamsSchema
}

export default tool