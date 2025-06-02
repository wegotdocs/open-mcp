import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchains",
  "toolDescription": "List supported chains for Fireblocks Staking",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/chains",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool