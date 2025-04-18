import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_pat_grant_request_repositories",
  "toolDescription": "List repositories requested to be accessed by a fine-grained personal access token",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-token-requests/{pat_request_id}/repositories",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "pat_request_id": "pat_request_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool