import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_instancesize",
  "toolDescription": "Retrieve an Instance Size",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/tiers/instance_sizes/{slug}",
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
      "slug": "slug"
    }
  },
  inputParamsSchema
}

export default tool