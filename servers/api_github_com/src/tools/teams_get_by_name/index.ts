import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_by_name",
  "toolDescription": "Get a team by name",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    }
  },
  inputParamsSchema
}

export default tool