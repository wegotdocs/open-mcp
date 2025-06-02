import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "checkthirdpartyrouting",
  "toolDescription": "Retrieve third-party network routing validation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections/{connectionId}/is_third_party_routing/{assetType}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "connectionId": "connectionId",
      "assetType": "assetType"
    }
  },
  inputParamsSchema
}

export default tool