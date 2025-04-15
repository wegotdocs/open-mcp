import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_update_subscription",
  "toolDescription": "Update Subscription Tier",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry/subscription",
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
      "tier_slug": "tier_slug"
    }
  },
  inputParamsSchema
}

export default tool