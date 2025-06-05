import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_payment_method_retrieve",
  "toolDescription": "",
  "baseUrl": "https://api.sporkbos.com",
  "path": "/api/teams/{id}/payment_method/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "query": {
      "payment_method_id": "payment_method_id"
    }
  },
  inputParamsSchema
}

export default tool