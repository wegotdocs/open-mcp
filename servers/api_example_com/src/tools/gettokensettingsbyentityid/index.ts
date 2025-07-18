import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettokensettingsbyentityid",
  "toolDescription": "Get tokenSettings of a specific entity.",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/admin/token/setting/entity/{entityId}",
  "method": "get",
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
      "entityId": "entityId"
    }
  },
  inputParamsSchema
}

export default tool