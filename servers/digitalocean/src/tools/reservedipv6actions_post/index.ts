import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reservedipv6actions_post",
  "toolDescription": "[Public Preview] Initiate a Reserved IPv6 Action",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/reserved_ipv6/{reserved_ipv6}/actions",
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
      "reserved_ipv6": "reserved_ipv6"
    }
  },
  inputParamsSchema
}

export default tool