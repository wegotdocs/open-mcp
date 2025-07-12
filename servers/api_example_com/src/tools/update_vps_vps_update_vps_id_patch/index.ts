import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_vps_vps_update_vps_id_patch",
  "toolDescription": "Update server details",
  "baseUrl": "https://api.example.com",
  "path": "/vps/update/{vps_id}",
  "method": "patch",
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
      "label": "label",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool