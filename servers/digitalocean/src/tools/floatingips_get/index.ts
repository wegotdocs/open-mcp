import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "floatingips_get",
  "toolDescription": "Retrieve an Existing Floating IP",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/floating_ips/{floating_ip}",
  "method": "get",
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
      "floating_ip": "floating_ip"
    }
  },
  inputParamsSchema
}

export default tool