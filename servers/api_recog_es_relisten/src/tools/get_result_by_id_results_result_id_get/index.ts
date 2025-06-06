import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_result_by_id_results_result_id_get",
  "toolDescription": "Get result by ID",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/results/{result_id}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "result_id": "result_id"
    }
  },
  inputParamsSchema
}

export default tool