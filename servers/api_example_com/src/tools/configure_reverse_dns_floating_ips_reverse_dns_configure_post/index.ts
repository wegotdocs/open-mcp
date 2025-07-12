import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "configure_reverse_dns_floating_ips_reverse_dns_configure_post",
  "toolDescription": "Configure reverse DNS",
  "baseUrl": "https://api.example.com",
  "path": "/floating_ips/reverse_dns/configure",
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
    "query": {
      "ip": "ip",
      "reverse_dns": "reverse_dns"
    }
  },
  inputParamsSchema
}

export default tool