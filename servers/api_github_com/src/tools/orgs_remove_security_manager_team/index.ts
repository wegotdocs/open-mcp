import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_remove_security_manager_team",
  "toolDescription": "Remove a security manager team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/security-managers/teams/{team_slug}",
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