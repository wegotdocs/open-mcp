import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_set_primary_email_visibility_for_authenticated_user",
  "toolDescription": "Set primary email visibility for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/email/visibility",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "body": {
      "visibility": "visibility"
    }
  },
  inputParamsSchema
}

export default tool