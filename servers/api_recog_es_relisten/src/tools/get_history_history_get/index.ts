import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_history_history_get",
  "toolDescription": "Get history of consultations",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/history",
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
    "query": {
      "per_page": "per_page",
      "last_evaluated_key": "last_evaluated_key",
      "reverse": "reverse",
      "field": "field"
    }
  },
  inputParamsSchema
}

export default tool