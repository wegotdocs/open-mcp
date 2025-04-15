import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "registry_create",
  "toolDescription": "Create Container Registry",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/registry",
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
      "subscription_tier_slug": "subscription_tier_slug",
      "region": "region"
    }
  },
  inputParamsSchema
}

export default tool