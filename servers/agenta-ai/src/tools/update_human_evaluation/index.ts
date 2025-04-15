import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_human_evaluation",
  "toolDescription": "Update Human Evaluation",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/human-evaluations/{evaluation_id}",
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
      "evaluation_id": "evaluation_id"
    },
    "body": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool