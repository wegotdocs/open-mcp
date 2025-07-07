import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_detail",
  "toolDescription": "Get account details",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/account/detail",
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
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool