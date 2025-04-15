import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettokensevmbycontract",
  "toolDescription": "Token Metadata by Contract",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/tokens/evm/{contract}",
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
      "contract": "contract"
    },
    "query": {
      "network_id": "network_id"
    }
  },
  inputParamsSchema
}

export default tool