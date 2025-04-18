import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_create_public_ssh_key_for_authenticated_user",
  "toolDescription": "Create a public SSH key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/keys",
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