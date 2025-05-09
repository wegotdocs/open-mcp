import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_app",
  "toolDescription": "Update App",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/apps/{app_id}",
  "method": "patch",
  "security": [
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "app_id": "app_id"
    },
    "body": {
      "app_name": "app_name"
    }
  },
  inputParamsSchema
}

export default tool