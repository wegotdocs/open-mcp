import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_review_pat_grant_requests_in_bulk",
  "toolDescription": "Review requests to access organization resources with fine-grained personal access tokens",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-token-requests",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "pat_request_ids": "pat_request_ids",
      "action": "action",
      "reason": "reason"
    }
  },
  inputParamsSchema
}

export default tool