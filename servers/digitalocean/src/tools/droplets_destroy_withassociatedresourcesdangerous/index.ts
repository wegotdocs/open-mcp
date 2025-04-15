import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droplets_destroy_withassociatedresourcesdangerous",
  "toolDescription": "Destroy a Droplet and All of its Associated Resources (Dangerous)",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/dangerous",
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
      "droplet_id": "droplet_id"
    },
    "header": {
      "X-Dangerous": "X-Dangerous"
    }
  },
  inputParamsSchema
}

export default tool