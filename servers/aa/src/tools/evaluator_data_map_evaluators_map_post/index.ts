import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evaluator_data_map_evaluators_map_post",
  "toolDescription": "Evaluator Data Map",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluators/map",
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
      "inputs": "inputs",
      "mapping": "mapping"
    }
  },
  inputParamsSchema
}

export default tool