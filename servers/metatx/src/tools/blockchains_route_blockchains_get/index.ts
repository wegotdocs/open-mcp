import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "blockchains_route_blockchains_get",
  "toolDescription": "Blockchains Route",
  "baseUrl": "https://engineapi.moonstream.to/metatx",
  "path": "/blockchains",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool