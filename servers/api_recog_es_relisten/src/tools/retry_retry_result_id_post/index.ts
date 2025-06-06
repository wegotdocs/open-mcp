import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retry_retry_result_id_post",
  "toolDescription": "Retry consultation.",
  "baseUrl": "https://api.recog.es/relisten",
  "path": "/retry/{result_id}",
  "method": "post",
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