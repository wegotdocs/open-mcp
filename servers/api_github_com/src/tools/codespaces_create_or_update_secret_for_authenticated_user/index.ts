import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_create_or_update_secret_for_authenticated_user",
  "toolDescription": "Create or update a secret for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/{secret_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    },
    "body": {
      "encrypted_value": "encrypted_value",
      "key_id": "key_id",
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool