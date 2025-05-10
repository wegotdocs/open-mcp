import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_evaluator_evaluations_id_evaluators_evaluator_version_id_",
  "toolDescription": "Remove Evaluator",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations/{id}/evaluators/{evaluator_version_id}",
  "method": "delete",
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
      "id": "id",
      "evaluator_version_id": "evaluator_version_id"
    }
  },
  inputParamsSchema
}

export default tool