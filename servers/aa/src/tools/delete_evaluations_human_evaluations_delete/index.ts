import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_evaluations_human_evaluations_delete",
  "toolDescription": "Delete Evaluations",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/human-evaluations",
  "method": "delete",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "body": {
      "evaluations_ids": "evaluations_ids"
    }
  },
  inputParamsSchema
}

export default tool