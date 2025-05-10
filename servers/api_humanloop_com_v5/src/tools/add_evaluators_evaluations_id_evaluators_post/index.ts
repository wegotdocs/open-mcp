import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_evaluators_evaluations_id_evaluators_post",
  "toolDescription": "Add Evaluators",
  "baseUrl": "https://api.humanloop.com/v5",
  "path": "/evaluations/{id}/evaluators",
  "method": "post",
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
    "body": {
      "evaluators": "evaluators"
    }
  },
  inputParamsSchema
}

export default tool