import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievelegacypointsforequipment",
  "toolDescription": "Retrieve Legacy Points by Equipment ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips/{equipId}/points (deprecated)",
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
      "equipId": "equipId"
    },
    "query": {
      "includeDeleted": "includeDeleted"
    }
  },
  inputParamsSchema
}

export default tool