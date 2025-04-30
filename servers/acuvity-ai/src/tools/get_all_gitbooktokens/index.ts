import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_gitbooktokens",
  "toolDescription": "List all available access policies.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/gitbooktokens",
  "method": "get",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool