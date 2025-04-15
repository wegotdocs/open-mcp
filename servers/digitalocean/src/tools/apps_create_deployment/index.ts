import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_create_deployment",
  "toolDescription": "Create an App Deployment",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/deployments",
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
      "app_id": "app_id"
    },
    "body": {
      "force_build": "force_build"
    }
  },
  inputParamsSchema
}

export default tool