import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontractasset",
  "toolDescription": "Find a contract asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts/{contractId}/{assetId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractId": "contractId",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool