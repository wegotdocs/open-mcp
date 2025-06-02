import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getamlscreeningpolicy",
  "toolDescription": "AML - View Screening Policy",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/aml/screening_policy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool