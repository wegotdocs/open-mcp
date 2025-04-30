import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_aidomains",
  "toolDescription": "List all AI domains.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains",
  "method": "get",
  "security": [
    {
      "key": "X-Namespace",
      "value": "<mcp-env-var>X_NAMESPACE</mcp-env-var>",
      "in": "header",
      "envVarName": "X_NAMESPACE"
    }
  ],
  "paramsMap": {
    "query": {
      "domain": "domain",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool