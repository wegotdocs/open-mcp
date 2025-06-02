import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getvaultbalancebyasset",
  "toolDescription": "Get vault balance by an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/assets/{assetId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool