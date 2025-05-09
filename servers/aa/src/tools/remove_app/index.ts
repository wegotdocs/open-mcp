import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "remove_app",
  "toolDescription": "Remove App",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/apps/{app_id}",
  "method": "delete",
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
    }
  },
  inputParamsSchema
}

export default tool