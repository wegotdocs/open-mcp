import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_delete_in_org",
  "toolDescription": "Delete a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}",
  "method": "delete",
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