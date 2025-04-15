import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reservedipsactions_post",
  "toolDescription": "Initiate a Reserved IP Action",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/reserved_ips/{reserved_ip}/actions",
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
      "reserved_ip": "reserved_ip"
    }
  },
  inputParamsSchema
}

export default tool