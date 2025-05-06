import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_create_ssh_signing_key_for_authenticated_user",
  "toolDescription": "Create a SSH signing key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/ssh_signing_keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "title": "title",
      "key": "key"
    }
  },
  inputParamsSchema
}

export default tool