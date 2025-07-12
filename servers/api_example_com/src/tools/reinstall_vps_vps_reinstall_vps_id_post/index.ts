import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reinstall_vps_vps_reinstall_vps_id_post",
  "toolDescription": "Reinstall server OS",
  "baseUrl": "https://api.example.com",
  "path": "/vps/reinstall/{vps_id}",
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
      "template_name": "template_name"
    }
  },
  inputParamsSchema
}

export default tool