import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_ip_range_of_network",
  "toolDescription": "Change IP range of a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/networks/{id}/actions/change_ip_range",
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
      "ip_range": "ip_range"
    }
  },
  inputParamsSchema
}

export default tool