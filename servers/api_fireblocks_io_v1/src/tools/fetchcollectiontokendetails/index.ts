import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "fetchcollectiontokendetails",
  "toolDescription": "Get collection token details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/collections/{id}/tokens/{tokenId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id",
      "tokenId": "tokenId"
    }
  },
  inputParamsSchema
}

export default tool