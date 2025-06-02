import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetworkconnections",
  "toolDescription": "List network connections",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_connections",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool