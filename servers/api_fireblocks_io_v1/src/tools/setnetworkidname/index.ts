import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setnetworkidname",
  "toolDescription": "Update network ID's name.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/{networkId}/set_name",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "networkId": "networkId"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool