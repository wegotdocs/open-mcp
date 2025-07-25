import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "requestdomainverification",
  "toolDescription": "Explicitly requests domain verification",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/domains/{owner}/{domain_ref}/request-verification",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool