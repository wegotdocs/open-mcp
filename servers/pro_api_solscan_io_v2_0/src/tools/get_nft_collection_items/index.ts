import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_nft_collection_items",
  "toolDescription": "Get NFT collection items",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/nft/collection/items",
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
      "collection": "collection",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool