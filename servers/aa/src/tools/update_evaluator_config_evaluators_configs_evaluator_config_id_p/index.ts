import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_evaluator_config_evaluators_configs_evaluator_config_id_p",
  "toolDescription": "Update Evaluator Config",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluators/configs/{evaluator_config_id}",
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
      "evaluator_config_id": "evaluator_config_id"
    },
    "body": {
      "name": "name",
      "evaluator_key": "evaluator_key",
      "settings_values": "settings_values"
    }
  },
  inputParamsSchema
}

export default tool