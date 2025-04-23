import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_versions_prompts_id_versions_get",
  "toolDescription": "List Versions of a Prompt",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/prompts/{id}/versions",
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
      "evaluator_aggregates": "evaluator_aggregates"
    }
  },
  inputParamsSchema
}

export default tool