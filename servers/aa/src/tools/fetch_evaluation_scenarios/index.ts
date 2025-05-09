import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_evaluation_scenarios",
  "toolDescription": "Fetch Evaluation Scenarios",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluations/{evaluation_id}/evaluation_scenarios",
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