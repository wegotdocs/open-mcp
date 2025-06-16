import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_type_of_server",
  "toolDescription": "Change the Type of a Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/change_type",
  "method": "post",
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
      "id": "id"
    },
    "body": {
      "server_type": "server_type",
      "upgrade_disk": "upgrade_disk"
    }
  },
  inputParamsSchema
}

export default tool