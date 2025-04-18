import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_invitation",
  "toolDescription": "Delete a repository invitation",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/invitations/{invitation_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "invitation_id": "invitation_id"
    }
  },
  inputParamsSchema
}

export default tool