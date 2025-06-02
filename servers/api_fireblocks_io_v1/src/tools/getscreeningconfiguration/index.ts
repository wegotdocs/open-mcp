import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscreeningconfiguration",
  "toolDescription": "Get Travel Rule Screening Policy Configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/travel_rule/policy_configuration",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool