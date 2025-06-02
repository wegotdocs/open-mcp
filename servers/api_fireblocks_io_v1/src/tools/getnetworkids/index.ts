import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnetworkids",
  "toolDescription": "Get all network IDs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/network_ids",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool