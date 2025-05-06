import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransfersevm",
  "toolDescription": "Transfers Events",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/transfers/evm",
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
    "query": {
      "network_id": "network_id",
      "from": "from",
      "to": "to",
      "contract": "contract",
      "startTime": "startTime",
      "endTime": "endTime",
      "orderBy": "orderBy",
      "orderDirection": "orderDirection",
      "transaction_id": "transaction_id",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool