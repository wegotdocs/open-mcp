import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "domains_create",
  "toolDescription": "Create a New Domain",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/domains",
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
    "body": {
      "name": "name",
      "ip_address": "ip_address",
      "ttl": "ttl",
      "zone_file": "zone_file"
    }
  },
  inputParamsSchema
}

export default tool