import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_remove_outside_collaborator",
  "toolDescription": "Remove outside collaborator from an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/outside_collaborators/{username}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool