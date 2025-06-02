import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeployedcontractbyaddress",
  "toolDescription": "Return deployed contract data",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/contracts/{assetId}/{contractAddress}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractAddress": "contractAddress",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool