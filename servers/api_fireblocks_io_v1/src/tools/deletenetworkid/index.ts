import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletenetworkid",
  "toolDescription": "Deletes specific network ID.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/{networkId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "networkId": "networkId"
    }
  },
  inputParamsSchema
}

export default tool