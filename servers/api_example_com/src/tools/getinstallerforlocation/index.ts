import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinstallerforlocation",
  "toolDescription": "Generate installer",
  "baseUrl": "https://api.example.com",
  "path": "/v2/organization/{id}/location/{location_id}/installer/{installer_type}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id",
      "location_id": "location_id",
      "installer_type": "installer_type"
    }
  },
  inputParamsSchema
}

export default tool