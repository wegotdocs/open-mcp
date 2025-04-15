import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "head_v1_installations_integrationconfigurationid_resources_resou",
  "toolDescription": "Get the data of a user-provided Edge Config",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config",
  "method": "head",
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
    }
  },
  inputParamsSchema
}

export default tool