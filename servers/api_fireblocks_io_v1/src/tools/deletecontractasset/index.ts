import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecontractasset",
  "toolDescription": "Delete a Whitelisted Contract's Asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts/{contractId}/{assetId}",
  "method": "delete",
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