import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_evaluators_endpoint_evaluators_get",
  "toolDescription": "Get Evaluators Endpoint",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/evaluators",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {},
  inputParamsSchema
}

export default tool