import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_resource_secrets",
  "toolDescription": "Update Resource Secrets (Deprecated)",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/products/{integrationProductIdOrSlug}/resources/{resourceId}/secrets",
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
      "integrationConfigurationId": "integrationConfigurationId",
      "integrationProductIdOrSlug": "integrationProductIdOrSlug",
      "resourceId": "resourceId"
    },
    "body": {
      "secrets": "secrets",
      "partial": "partial"
    }
  },
  inputParamsSchema
}

export default tool