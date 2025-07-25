import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getorganizationpendinginvites",
  "toolDescription": "Get all pending invites for the organization",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members/invites",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool