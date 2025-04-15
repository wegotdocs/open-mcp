import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_exec_active_deployment",
  "toolDescription": "Retrieve Exec URL",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/components/{component_name}/exec",
  "method": "get",
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
      "component_name": "component_name"
    }
  },
  inputParamsSchema
}

export default tool