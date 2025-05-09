import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_bases",
  "toolDescription": "List Bases",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/bases",
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
    "query": {
      "app_id": "app_id",
      "base_name": "base_name"
    }
  },
  inputParamsSchema
}

export default tool