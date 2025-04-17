import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteequipmentbyid",
  "toolDescription": "Delete Equipment",
  "baseUrl": "https://api.example.com",
  "path": "/v2/equips/{equipId}",
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
      "equipId": "equipId"
    }
  },
  inputParamsSchema
}

export default tool