import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_delete_email_for_authenticated_user",
  "toolDescription": "Delete an email address for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/emails",
  "method": "delete",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool