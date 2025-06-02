import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getproviders",
  "toolDescription": "List staking providers details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool