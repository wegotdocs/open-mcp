import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "firewalls_assign_droplets",
  "toolDescription": "Add Droplets to a Firewall",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/firewalls/{firewall_id}/droplets",
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
      "firewall_id": "firewall_id"
    },
    "body": {
      "droplet_ids": "droplet_ids"
    }
  },
  inputParamsSchema
}

export default tool