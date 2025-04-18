import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_attestations",
  "toolDescription": "List attestations",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/attestations/{subject_digest}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "subject_digest": "subject_digest"
    },
    "query": {
      "per_page": "per_page",
      "before": "before",
      "after": "after",
      "predicate_type": "predicate_type"
    }
  },
  inputParamsSchema
}

export default tool