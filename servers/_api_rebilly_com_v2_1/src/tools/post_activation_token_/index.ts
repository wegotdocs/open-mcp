import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_activation_token_",
  "toolDescription": "Sends a token to activate user account",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/activation/{token}",
  "method": "post",
  "security": [
    {
      "key": "REB-AUTH",
      "value": "<mcp-env-var>REB_AUTH</mcp-env-var>",
      "in": "header",
      "envVarName": "REB_AUTH"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool