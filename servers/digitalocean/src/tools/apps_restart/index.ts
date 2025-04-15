import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_restart",
  "toolDescription": "Restart an App",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/{app_id}/restart",
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
      "components": "components"
    }
  },
  inputParamsSchema
}

export default tool