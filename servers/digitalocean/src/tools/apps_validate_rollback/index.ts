import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_validate_rollback",
  "toolDescription": "Validate App Rollback",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/rollback/validate",
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
      "deployment_id": "deployment_id",
      "skip_pin": "skip_pin"
    }
  },
  inputParamsSchema
}

export default tool