import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droplets_get",
  "toolDescription": "Retrieve an Existing Droplet",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/{droplet_id}",
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
      "droplet_id": "droplet_id"
    }
  },
  inputParamsSchema
}

export default tool