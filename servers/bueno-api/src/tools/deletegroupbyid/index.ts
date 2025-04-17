import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletegroupbyid",
  "toolDescription": "Delete Group",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equip-groups/{equipGroupId}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool