import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_human_evaluation",
  "toolDescription": "Create Human Evaluation",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/human-evaluations",
  "method": "post",
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
      "app_id": "app_id",
      "variant_ids": "variant_ids",
      "evaluation_type": "evaluation_type",
      "inputs": "inputs",
      "testset_id": "testset_id",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool