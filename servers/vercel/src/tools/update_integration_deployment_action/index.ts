import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_integration_deployment_action",
  "toolDescription": "Update deployment integration action",
  "baseUrl": "https://api.vercel.com",
  "path": "/v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}",
  "method": "patch",
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
      "deploymentId": "deploymentId",
      "integrationConfigurationId": "integrationConfigurationId",
      "resourceId": "resourceId",
      "action": "action"
    },
    "body": {
      "status": "status",
      "statusText": "statusText",
      "outcomes": "outcomes"
    }
  },
  inputParamsSchema
}

export default tool