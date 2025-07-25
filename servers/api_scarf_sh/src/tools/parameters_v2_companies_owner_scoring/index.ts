import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_companies_owner_scoring",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/companies/{owner}/scoring",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool