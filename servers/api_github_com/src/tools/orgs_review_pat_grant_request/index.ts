import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_review_pat_grant_request",
  "toolDescription": "Review a request to access organization resources with a fine-grained personal access token",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/personal-access-token-requests/{pat_request_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "pat_request_id": "pat_request_id"
    },
    "body": {
      "action": "action",
      "reason": "reason"
    }
  },
  inputParamsSchema
}

export default tool