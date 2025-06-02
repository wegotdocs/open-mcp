import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsummarybyvault",
  "toolDescription": "Get staking summary details by vault",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/positions/summary/vaults",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool