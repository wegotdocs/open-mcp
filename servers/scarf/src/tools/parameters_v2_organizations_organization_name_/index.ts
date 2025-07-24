import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_organizations_organization_name_",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool