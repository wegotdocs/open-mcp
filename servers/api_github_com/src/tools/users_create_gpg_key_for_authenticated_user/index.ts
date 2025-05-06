import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_create_gpg_key_for_authenticated_user",
  "toolDescription": "Create a GPG key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/gpg_keys",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name",
      "armored_public_key": "armored_public_key"
    }
  },
  inputParamsSchema
}

export default tool