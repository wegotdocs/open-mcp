import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_create_discussion_in_org",
  "toolDescription": "Create a discussion",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    },
    "body": {
      "title": "title",
      "body": "body",
      "private": "private"
    }
  },
  inputParamsSchema
}

export default tool