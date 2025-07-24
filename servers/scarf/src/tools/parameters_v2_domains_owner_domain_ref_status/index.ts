import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_v2_domains_owner_domain_ref_status",
  "toolDescription": "",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/domains/{owner}/{domain_ref}/status",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool