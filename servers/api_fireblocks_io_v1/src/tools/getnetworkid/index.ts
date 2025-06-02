import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetworkid",
  "toolDescription": "Returns specific network ID.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/{networkId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "networkId": "networkId"
    }
  },
  inputParamsSchema
}

export default tool