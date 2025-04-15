import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droplets_destroy_withassociatedresourcesselective",
  "toolDescription": "Selectively Destroy a Droplet and its Associated Resources",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/{droplet_id}/destroy_with_associated_resources/selective",
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
    "body": {
      "reserved_ips": "reserved_ips",
      "snapshots": "snapshots",
      "volumes": "volumes",
      "volume_snapshots": "volume_snapshots"
    }
  },
  inputParamsSchema
}

export default tool