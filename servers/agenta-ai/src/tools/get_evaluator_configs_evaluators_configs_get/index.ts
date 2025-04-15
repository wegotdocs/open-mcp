import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_evaluator_configs_evaluators_configs_get",
  "toolDescription": "Get Evaluator Configs",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluators/configs",
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
    "query": {
      "app_id": "app_id"
    }
  },
  inputParamsSchema
}

export default tool