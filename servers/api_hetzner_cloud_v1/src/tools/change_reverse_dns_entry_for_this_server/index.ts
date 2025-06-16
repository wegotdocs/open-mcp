import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_reverse_dns_entry_for_this_server",
  "toolDescription": "Change reverse DNS entry for this Server",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/servers/{id}/actions/change_dns_ptr",
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
      "dns_ptr": "dns_ptr",
      "ip": "ip"
    }
  },
  inputParamsSchema
}

export default tool