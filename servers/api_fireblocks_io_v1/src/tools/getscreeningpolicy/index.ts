import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscreeningpolicy",
  "toolDescription": "Travel Rule - View Screening Policy",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/screening_policy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool