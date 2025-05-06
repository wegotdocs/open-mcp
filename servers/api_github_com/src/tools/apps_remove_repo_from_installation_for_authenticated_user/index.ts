import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_remove_repo_from_installation_for_authenticated_user",
  "toolDescription": "Remove a repository from an app installation",
  "baseUrl": "https://api.github.com",
  "path": "/user/installations/{installation_id}/repositories/{repository_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "installation_id": "installation_id",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool