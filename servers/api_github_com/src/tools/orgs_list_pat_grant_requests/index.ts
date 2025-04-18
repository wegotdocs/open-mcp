import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_pat_grant_requests",
  "toolDescription": "List requests to access organization resources with fine-grained personal access tokens",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-token-requests",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "sort": "sort",
      "direction": "direction",
      "owner": "owner",
      "repository": "repository",
      "permission": "permission",
      "last_used_before": "last_used_before",
      "last_used_after": "last_used_after",
      "token_id": "token_id"
    }
  },
  inputParamsSchema
}

export default tool