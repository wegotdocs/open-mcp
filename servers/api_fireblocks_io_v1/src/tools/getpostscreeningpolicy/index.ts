import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpostscreeningpolicy",
  "toolDescription": "Travel Rule - View Post-Screening Policy",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/post_screening_policy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool