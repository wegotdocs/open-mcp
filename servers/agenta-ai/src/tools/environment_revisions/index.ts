import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "environment_revisions",
  "toolDescription": "List App Environment Revisions",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/apps/{app_id}/revisions/{environment_name}",
  "method": "get",
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
      "app_id": "app_id",
      "environment_name": "environment_name"
    }
  },
  inputParamsSchema
}

export default tool