import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setnetworkiddiscoverability",
  "toolDescription": "Update network ID's discoverability.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids/{networkId}/set_discoverability",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "networkId": "networkId"
    },
    "body": {
      "isDiscoverable": "isDiscoverable"
    }
  },
  inputParamsSchema
}

export default tool