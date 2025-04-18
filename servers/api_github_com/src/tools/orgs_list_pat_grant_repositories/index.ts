import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_pat_grant_repositories",
  "toolDescription": "List repositories a fine-grained personal access token has access to",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-tokens/{pat_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "pat_id": "pat_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool