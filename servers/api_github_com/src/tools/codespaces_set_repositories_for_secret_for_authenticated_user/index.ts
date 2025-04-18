import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_set_repositories_for_secret_for_authenticated_user",
  "toolDescription": "Set selected repositories for a user secret",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/{secret_name}/repositories",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool