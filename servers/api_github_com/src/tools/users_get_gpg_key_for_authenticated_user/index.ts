import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_get_gpg_key_for_authenticated_user",
  "toolDescription": "Get a GPG key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/gpg_keys/{gpg_key_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "gpg_key_id": "gpg_key_id"
    }
  },
  inputParamsSchema
}

export default tool