import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletenetworkconnection",
  "toolDescription": "Deletes a network connection by ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections/{connectionId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "connectionId": "connectionId"
    }
  },
  inputParamsSchema
}

export default tool