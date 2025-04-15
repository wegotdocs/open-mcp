import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cdn_create_endpoint",
  "toolDescription": "Create a New CDN Endpoint",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/cdn/endpoints",
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
      "id": "id",
      "origin": "origin",
      "endpoint": "endpoint",
      "ttl": "ttl",
      "certificate_id": "certificate_id",
      "custom_domain": "custom_domain",
      "created_at": "created_at"
    }
  },
  inputParamsSchema
}

export default tool