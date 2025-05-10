import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tools_id_get",
  "toolDescription": "Get Tool",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/tools/{id}",
  "method": "get",
  "security": [
    {
      "key": "X-API-KEY",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "version_id": "version_id",
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool