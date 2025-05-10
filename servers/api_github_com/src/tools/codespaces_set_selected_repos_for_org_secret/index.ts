import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "codespaces_set_selected_repos_for_org_secret",
  "toolDescription": "Set selected repositories for an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/codespaces/secrets/{secret_name}/repositories",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name"
    },
    "body": {
      "selected_repository_ids": "selected_repository_ids"
    }
  },
  inputParamsSchema
}

export default tool