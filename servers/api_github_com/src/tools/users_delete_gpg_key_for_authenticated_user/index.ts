import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_delete_gpg_key_for_authenticated_user",
  "toolDescription": "Delete a GPG key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/gpg_keys/{gpg_key_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "gpg_key_id": "gpg_key_id"
    }
  },
  inputParamsSchema
}

export default tool