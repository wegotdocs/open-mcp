import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getamlpostscreeningpolicy",
  "toolDescription": "AML - View Post-Screening Policy",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/aml/post_screening_policy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool