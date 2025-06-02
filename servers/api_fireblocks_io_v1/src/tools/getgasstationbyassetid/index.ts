import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgasstationbyassetid",
  "toolDescription": "Get gas station settings by asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/gas_station/{assetId}",
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