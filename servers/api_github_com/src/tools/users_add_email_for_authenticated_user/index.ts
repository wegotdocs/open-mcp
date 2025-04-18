import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_add_email_for_authenticated_user",
  "toolDescription": "Add an email address for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/emails",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool