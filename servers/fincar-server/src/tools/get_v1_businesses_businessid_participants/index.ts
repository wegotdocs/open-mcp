import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_v1_businesses_businessid_participants",
  "toolDescription": "List enrolled participants",
  "baseUrl": "https://api.fincar.com.au/sandbox",
  "path": "/v1/businesses/{businessId}/participants",
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
      "businessId": "businessId"
    },
    "query": {
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool