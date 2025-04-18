import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_remove_repository_for_secret_for_authenticated_user",
  "toolDescription": "Remove a selected repository from a user secret",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/{secret_name}/repositories/{repository_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool