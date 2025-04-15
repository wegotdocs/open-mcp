import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_evaluator_config_evaluators_configs_evaluator_config_id_d",
  "toolDescription": "Delete Evaluator Config",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluators/configs/{evaluator_config_id}",
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
    "path": {
      "evaluator_config_id": "evaluator_config_id"
    }
  },
  inputParamsSchema
}

export default tool