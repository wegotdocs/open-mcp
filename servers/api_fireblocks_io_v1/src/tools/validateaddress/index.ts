import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "validateaddress",
  "toolDescription": "Validate destination address",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/validate_address/{assetId}/{address}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "assetId": "assetId",
      "address": "address"
    }
  },
  inputParamsSchema
}

export default tool