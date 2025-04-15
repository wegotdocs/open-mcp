import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_cancel_deployment",
  "toolDescription": "Cancel a Deployment",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/deployments/{deployment_id}/cancel",
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
      "app_id": "app_id",
      "deployment_id": "deployment_id"
    }
  },
  inputParamsSchema
}

export default tool