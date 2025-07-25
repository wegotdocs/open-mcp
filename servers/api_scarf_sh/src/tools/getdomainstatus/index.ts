import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdomainstatus",
  "toolDescription": "Returns the status of a domain",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/domains/{owner}/{domain_ref}/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool