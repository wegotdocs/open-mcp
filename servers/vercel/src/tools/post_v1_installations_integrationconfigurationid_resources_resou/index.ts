import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_v1_installations_integrationconfigurationid_resources_resou",
  "toolDescription": "Create one or multiple experimentation items",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items",
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
      "integrationConfigurationId": "integrationConfigurationId",
      "resourceId": "resourceId"
    },
    "body": {
      "items": "items"
    }
  },
  inputParamsSchema
}

export default tool