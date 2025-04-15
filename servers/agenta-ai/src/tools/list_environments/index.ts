import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_environments",
  "toolDescription": "List Environments",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/apps/{app_id}/environments",
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
      "app_id": "app_id"
    }
  },
  inputParamsSchema
}

export default tool