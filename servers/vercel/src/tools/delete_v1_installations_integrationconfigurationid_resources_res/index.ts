import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_v1_installations_integrationconfigurationid_resources_res",
  "toolDescription": "Delete an existing experimentation item",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}",
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
      "integrationConfigurationId": "integrationConfigurationId",
      "resourceId": "resourceId",
      "itemId": "itemId"
    }
  },
  inputParamsSchema
}

export default tool