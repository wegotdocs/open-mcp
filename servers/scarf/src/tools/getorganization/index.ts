import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getorganization",
  "toolDescription": "Get organization",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool