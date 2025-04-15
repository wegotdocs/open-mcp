import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cdn_update_endpoints",
  "toolDescription": "Update a CDN Endpoint",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/cdn/endpoints/{cdn_id}",
  "method": "put",
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
      "cdn_id": "cdn_id"
    },
    "body": {
      "ttl": "ttl",
      "certificate_id": "certificate_id",
      "custom_domain": "custom_domain"
    }
  },
  inputParamsSchema
}

export default tool