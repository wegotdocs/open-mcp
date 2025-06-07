import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_iam_roles_api_aws_iam_roles_search_get",
  "toolDescription": "Search Iam Roles",
  "baseUrl": "https://api.example.com",
  "path": "/api/aws/iam-roles/search",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "search_term": "search_term",
      "max_results": "max_results"
    }
  },
  inputParamsSchema
}

export default tool