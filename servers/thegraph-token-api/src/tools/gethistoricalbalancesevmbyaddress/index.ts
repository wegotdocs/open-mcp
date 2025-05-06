import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gethistoricalbalancesevmbyaddress",
  "toolDescription": "Historical Balances",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/historical/balances/evm/{address}",
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
      "interval": "interval",
      "network_id": "network_id",
      "contracts": "contracts",
      "startTime": "startTime",
      "endTime": "endTime",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool