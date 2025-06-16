import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "change_reverse_dns_records_for_floating_ip",
  "toolDescription": "Change reverse DNS records for a Floating IP",
  "baseUrl": "https://api.hetzner.cloud/v1",
  "path": "/floating_ips/{id}/actions/change_dns_ptr",
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