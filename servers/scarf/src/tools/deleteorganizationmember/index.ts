import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteorganizationmember",
  "toolDescription": "Delete organization member",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members/{organization_member}",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool