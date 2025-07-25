import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "invitemember",
  "toolDescription": "Invite a member who is not yet a scarf user by email",
  "baseUrl": "https://api.scarf.sh",
  "path": "/v2/organizations/{organization_name}/members/invites",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool