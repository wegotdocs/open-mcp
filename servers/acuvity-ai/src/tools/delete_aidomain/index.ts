import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_aidomain",
  "toolDescription": "Delete an AI domain given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/aidomains/{id}",
  "method": "delete",
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