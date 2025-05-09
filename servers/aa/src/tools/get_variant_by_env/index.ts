import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_variant_by_env",
  "toolDescription": "Get Variant By Env",
  "baseUrl": "https://cloud.agenta.ai/v1",
  "path": "/apps/get_variant_by_env",
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
      "environment": "environment"
    }
  },
  inputParamsSchema
}

export default tool