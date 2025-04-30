import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_accesspolicy",
  "toolDescription": "Deletes the access policy with the given ID.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/accesspolicies/{id}",
  "method": "delete",
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
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool