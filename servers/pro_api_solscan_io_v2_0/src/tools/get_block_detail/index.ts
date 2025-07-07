import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_block_detail",
  "toolDescription": "Get block details",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/block/detail",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "block": "block"
    }
  },
  inputParamsSchema
}

export default tool