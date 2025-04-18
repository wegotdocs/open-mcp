import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_add_repo_to_installation_for_authenticated_user",
  "toolDescription": "Add a repository to an app installation",
  "baseUrl": "https://api.github.com",
  "path": "/user/installations/{installation_id}/repositories/{repository_id}",
  "method": "put",
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