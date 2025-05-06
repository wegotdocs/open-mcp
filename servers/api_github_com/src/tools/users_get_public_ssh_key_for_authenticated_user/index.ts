import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_get_public_ssh_key_for_authenticated_user",
  "toolDescription": "Get a public SSH key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/keys/{key_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "key_id": "key_id"
    }
  },
  inputParamsSchema
}

export default tool