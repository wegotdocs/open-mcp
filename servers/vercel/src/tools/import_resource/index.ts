import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "import_resource",
  "toolDescription": "Import Resource",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/installations/{integrationConfigurationId}/resources/{resourceId}",
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
      "resourceId": "resourceId"
    },
    "body": {
      "productId": "productId",
      "name": "name",
      "status": "status",
      "metadata": "metadata",
      "billingPlan": "billingPlan",
      "notification": "notification",
      "secrets": "secrets"
    }
  },
  inputParamsSchema
}

export default tool