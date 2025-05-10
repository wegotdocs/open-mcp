import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_list_org_events_for_authenticated_user",
  "toolDescription": "List organization events for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/users/{username}/events/orgs/{org}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "username": "username",
      "org": "org"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool