import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reservedips_get",
  "toolDescription": "Retrieve an Existing Reserved IP",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/reserved_ips/{reserved_ip}",
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
      "reserved_ip": "reserved_ip"
    }
  },
  inputParamsSchema
}

export default tool