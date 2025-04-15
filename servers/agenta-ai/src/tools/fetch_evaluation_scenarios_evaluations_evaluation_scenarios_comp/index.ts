import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_evaluation_scenarios_evaluations_evaluation_scenarios_comp",
  "toolDescription": "Fetch Evaluation Scenarios",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluations/evaluation_scenarios/comparison-results",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "query": {
      "evaluations_ids": "evaluations_ids"
    }
  },
  inputParamsSchema
}

export default tool