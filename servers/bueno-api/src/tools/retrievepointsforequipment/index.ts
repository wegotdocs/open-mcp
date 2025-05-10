import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievepointsforequipment",
  "toolDescription": "Retrieve Points by Equipment ID",
  "baseUrl": "https://api.example.com",
  "path": "/v3/equips/{equipId}/points",
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