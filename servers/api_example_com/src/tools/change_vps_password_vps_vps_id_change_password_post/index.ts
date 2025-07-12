import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_vps_password_vps_vps_id_change_password_post",
  "toolDescription": "Reset root password",
  "baseUrl": "https://api.example.com",
  "path": "/vps/{vps_id}/change-password",
  "method": "post",
  "security": [
    {
      "key": "X-API-Key",
      "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "X_API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "vps_id": "vps_id"
    },
    "body": {
      "password": "password"
    }
  },
  inputParamsSchema
}

export default tool