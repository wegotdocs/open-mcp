import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_custom_properties_values_for_repos",
  "toolDescription": "List custom property values for organization repositories",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/properties/values",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page",
      "repository_query": "repository_query"
    }
  },
  inputParamsSchema
}

export default tool