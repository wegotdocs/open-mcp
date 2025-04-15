import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetch_list_human_evaluations_human_evaluations_get",
  "toolDescription": "Fetch List Human Evaluations",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/human-evaluations",
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