import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_providerdetails",
  "toolDescription": "List all available provider details.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/providerdetails",
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
      "icon": "icon",
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool