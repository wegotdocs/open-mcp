import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getbalancesevmbyaddress",
  "toolDescription": "Token Balances by Wallet Address",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/balances/evm/{address}",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "address": "address"
    },
    "query": {
      "network_id": "network_id",
      "contract": "contract",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool