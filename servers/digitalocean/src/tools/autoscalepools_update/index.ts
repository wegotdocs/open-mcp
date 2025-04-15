import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "autoscalepools_update",
  "toolDescription": "Update Autoscale Pool",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/autoscale/{autoscale_pool_id}",
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
      "autoscale_pool_id": "autoscale_pool_id"
    },
    "body": {
      "name": "name",
      "config": "config",
      "droplet_template": "droplet_template"
    }
  },
  inputParamsSchema
}

export default tool