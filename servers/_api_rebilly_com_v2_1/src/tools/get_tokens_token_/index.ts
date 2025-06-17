import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tokens_token_",
  "toolDescription": "Retrieve a token",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/tokens/{token}",
  "method": "get",
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