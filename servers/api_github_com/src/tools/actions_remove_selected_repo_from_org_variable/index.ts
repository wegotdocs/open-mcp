import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_remove_selected_repo_from_org_variable",
  "toolDescription": "Remove selected repository from an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "name": "name",
      "repository_id": "repository_id"
    }
  },
  inputParamsSchema
}

export default tool