import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_human_evaluation_human_evaluations_evaluation_id_get",
  "toolDescription": "Fetch Human Evaluation",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/human-evaluations/{evaluation_id}",
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
    "path": {
      "evaluation_id": "evaluation_id"
    }
  },
  inputParamsSchema
}

export default tool