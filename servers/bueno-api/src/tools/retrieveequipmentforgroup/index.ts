import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveequipmentforgroup",
  "toolDescription": "Retrieve Equipment by Group ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equip-groups/{equipGroupId}/equips",
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
      "equipGroupId": "equipGroupId"
    },
    "query": {
      "includeDeleted": "includeDeleted"
    }
  },
  inputParamsSchema
}

export default tool