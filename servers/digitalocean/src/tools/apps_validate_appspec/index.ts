import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_validate_appspec",
  "toolDescription": "Propose an App Spec",
  "baseUrl": "https://api.digitalocean.com",
  "path": "/v2/apps/propose",
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
    "body": {
      "spec": "spec",
      "app_id": "app_id"
    }
  },
  inputParamsSchema
}

export default tool