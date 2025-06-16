import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_floating_ip",
  "toolDescription": "Create a Floating IP",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/floating_ips",
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
    "body": {
      "description": "description",
      "home_location": "home_location",
      "labels": "labels",
      "name": "name",
      "server": "server",
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool