import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_evaluation",
  "toolDescription": "Create Evaluation",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluations",
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
      "revisions_ids": "revisions_ids",
      "evaluators_configs": "evaluators_configs",
      "testset_id": "testset_id",
      "rate_limit": "rate_limit",
      "correct_answer_column": "correct_answer_column"
    }
  },
  inputParamsSchema
}

export default tool