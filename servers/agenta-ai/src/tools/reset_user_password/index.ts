import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reset_user_password",
  "toolDescription": "Reset User Password",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/profile/reset-password",
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
    "query": {
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool