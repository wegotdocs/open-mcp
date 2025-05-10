import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_evaluators_get",
  "toolDescription": "List Evaluators",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluators",
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
      "page": "page",
      "size": "size",
      "name": "name",
      "user_filter": "user_filter",
      "sort_by": "sort_by",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool