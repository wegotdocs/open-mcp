import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_add_selected_repo_to_org_variable",
  "toolDescription": "Add selected repository to an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables/{name}/repositories/{repository_id}",
  "method": "put",
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