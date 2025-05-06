import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_get_ssh_signing_key_for_authenticated_user",
  "toolDescription": "Get an SSH signing key for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/ssh_signing_keys/{ssh_signing_key_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "ssh_signing_key_id": "ssh_signing_key_id"
    }
  },
  inputParamsSchema
}

export default tool