import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_evaluator_config_evaluators_configs_evaluator_config_id_get",
  "toolDescription": "Get Evaluator Config",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluators/configs/{evaluator_config_id}",
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
      "evaluator_config_id": "evaluator_config_id"
    }
  },
  inputParamsSchema
}

export default tool