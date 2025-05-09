import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_evaluation_status",
  "toolDescription": "Fetch Evaluation Status",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluations/{evaluation_id}/status",
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