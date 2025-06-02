import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "estimatenetworkfee",
  "toolDescription": "Estimate the required fee for an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/estimate_network_fee",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool