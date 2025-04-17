import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrieveequipmentforsite",
  "toolDescription": "Retrieve Equipment by Site ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/sites/{siteId}/equips",
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
      "siteId": "siteId"
    },
    "query": {
      "includeDeleted": "includeDeleted",
      "equipGroupId": "equipGroupId"
    }
  },
  inputParamsSchema
}

export default tool