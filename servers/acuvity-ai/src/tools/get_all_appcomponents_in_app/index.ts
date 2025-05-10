import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_appcomponents_in_app",
  "toolDescription": "Retrieve the list of app components for that application with their respective\nidentity tokens.",
  "baseUrl": "https://api.acuvity.ai",
  "path": "/apps/{id}/appcomponents",
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
      "q": "q"
    }
  },
  inputParamsSchema
}

export default tool