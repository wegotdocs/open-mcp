import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_evaluation_scenario_router_human_evaluations_evaluation_i",
  "toolDescription": "Update Evaluation Scenario Router",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/human-evaluations/{evaluation_id}/evaluation_scenario/{evaluation_scenario_id}/{evaluation_type}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "evaluation_id": "evaluation_id",
      "evaluation_scenario_id": "evaluation_scenario_id",
      "evaluation_type": "evaluation_type"
    },
    "body": {
      "vote": "vote",
      "score": "score",
      "correct_answer": "correct_answer",
      "outputs": "outputs",
      "inputs": "inputs",
      "is_pinned": "is_pinned",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool