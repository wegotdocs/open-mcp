import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_config",
  "toolDescription": "Get Config",
  "baseUrl": "https://cloud.agenta.ai/api",
  "path": "/configs",
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
      "base_id": "base_id",
      "config_name": "config_name",
      "environment_name": "environment_name"
    }
  },
  inputParamsSchema
}

export default tool