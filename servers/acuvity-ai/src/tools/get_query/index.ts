import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_query",
  "toolDescription": "Retrieve a log given its identifier.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/queries/{id}",
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