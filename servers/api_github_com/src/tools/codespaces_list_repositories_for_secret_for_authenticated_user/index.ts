import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_list_repositories_for_secret_for_authenticated_user",
  "toolDescription": "List selected repositories for a user secret",
  "baseUrl": "https://api.github.com",
  "path": "/user/codespaces/secrets/{secret_name}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "secret_name": "secret_name"
    }
  },
  inputParamsSchema
}

export default tool