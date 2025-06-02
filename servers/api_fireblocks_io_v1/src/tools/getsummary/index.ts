import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsummary",
  "toolDescription": "Get staking summary details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/positions/summary",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool