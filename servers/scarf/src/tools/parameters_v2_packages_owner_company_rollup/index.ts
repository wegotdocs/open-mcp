import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_packages_owner_company_rollup",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/packages/{owner}/company-rollup",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool