import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_push_revocation",
  "toolDescription": "Push the realm's revocation policy to any client that has an admin url associated with it.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/push-revocation",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool