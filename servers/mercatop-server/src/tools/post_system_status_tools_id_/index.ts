import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_system_status_tools_id_",
  "toolDescription": "",
  "baseUrl": "https://api.mercatop.com/v1",
  "path": "/system_status/tools/{id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "name": "name",
      "action": "action",
      "description": "description",
      "success": "success",
      "message": "message"
    }
  },
  inputParamsSchema
}

export default tool