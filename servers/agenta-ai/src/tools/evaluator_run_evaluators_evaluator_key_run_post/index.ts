import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "evaluator_run_evaluators_evaluator_key_run_post",
  "toolDescription": "Evaluator Run",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/evaluators/{evaluator_key}/run",
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
    "path": {
      "evaluator_key": "evaluator_key"
    },
    "body": {
      "inputs": "inputs",
      "settings": "settings",
      "credentials": "credentials"
    }
  },
  inputParamsSchema
}

export default tool