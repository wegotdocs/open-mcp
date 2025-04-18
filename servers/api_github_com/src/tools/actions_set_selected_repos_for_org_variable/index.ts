import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_selected_repos_for_org_variable",
  "toolDescription": "Set selected repositories for an organization variable",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/variables/{name}/repositories",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "name": "name"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool