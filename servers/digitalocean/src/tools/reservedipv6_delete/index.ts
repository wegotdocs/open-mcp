import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reservedipv6_delete",
  "toolDescription": "[Public Preview] Delete a Reserved IPv6",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/reserved_ipv6/{reserved_ipv6}",
  "method": "delete",
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