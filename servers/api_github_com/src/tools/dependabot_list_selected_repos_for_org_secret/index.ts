import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dependabot_list_selected_repos_for_org_secret",
  "toolDescription": "List selected repositories for an organization secret",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/dependabot/secrets/{secret_name}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "secret_name": "secret_name"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool