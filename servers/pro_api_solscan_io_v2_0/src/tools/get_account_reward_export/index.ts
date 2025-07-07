import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_reward_export",
  "toolDescription": "Export rewards",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/account/reward/export",
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
      "account": "account"
    }
  },
  inputParamsSchema
}

export default tool