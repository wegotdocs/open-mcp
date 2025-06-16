import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_alias_ips_of_network",
  "toolDescription": "Change alias IPs of a Network",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/change_alias_ips",
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
      "alias_ips": "alias_ips",
      "network": "network"
    }
  },
  inputParamsSchema
}

export default tool