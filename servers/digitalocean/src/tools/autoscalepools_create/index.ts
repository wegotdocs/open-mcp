import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "autoscalepools_create",
  "toolDescription": "Create a New Autoscale Pool",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/droplets/autoscale",
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
      "config": "config",
      "droplet_template": "droplet_template"
    }
  },
  inputParamsSchema
}

export default tool