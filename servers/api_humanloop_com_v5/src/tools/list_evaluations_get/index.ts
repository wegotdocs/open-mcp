import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_evaluations_get",
  "toolDescription": "List Evaluations",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations",
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
    "query": {
      "file_id": "file_id",
      "page": "page",
      "size": "size"
    }
  },
  inputParamsSchema
}

export default tool