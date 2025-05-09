import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_new_evaluator_config_evaluators_configs_post",
  "toolDescription": "Create New Evaluator Config",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluators/configs",
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
      "name": "name",
      "evaluator_key": "evaluator_key",
      "settings_values": "settings_values"
    }
  },
  inputParamsSchema
}

export default tool