import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetwork",
  "toolDescription": "Get a network connection",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections/{connectionId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "connectionId": "connectionId"
    }
  },
  inputParamsSchema
}

export default tool