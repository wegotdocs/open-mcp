import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getamlscreeningconfiguration",
  "toolDescription": "Get AML Screening Policy Configuration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/aml/policy_configuration",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool