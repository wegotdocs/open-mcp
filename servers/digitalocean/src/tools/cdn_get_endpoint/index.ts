import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cdn_get_endpoint",
  "toolDescription": "Retrieve an Existing CDN Endpoint",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/cdn/endpoints/{cdn_id}",
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
      "cdn_id": "cdn_id"
    }
  },
  inputParamsSchema
}

export default tool