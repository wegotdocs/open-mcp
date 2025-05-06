import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_invitation",
  "toolDescription": "Update a repository invitation",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/invitations/{invitation_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "invitation_id": "invitation_id"
    },
    "body": {
      "permissions": "permissions"
    }
  },
  inputParamsSchema
}

export default tool