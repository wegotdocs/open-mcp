import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsmarttransferstatistic",
  "toolDescription": "Get smart transfers statistic",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart_transfers/statistic",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool