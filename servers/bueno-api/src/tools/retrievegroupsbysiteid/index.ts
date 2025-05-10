import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "retrievegroupsbysiteid",
  "toolDescription": "Retrieve Groups by Site ID",
  "baseUrl": "https://api.example.com",
  "path": "/v2/sites/{siteId}/equip-groups",
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
    }
  },
  inputParamsSchema
}

export default tool