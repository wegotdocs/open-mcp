import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_decline_invitation_for_authenticated_user",
  "toolDescription": "Decline a repository invitation",
  "baseUrl": "https://api.github.com",
  "path": "/user/repository_invitations/{invitation_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "invitation_id": "invitation_id"
    }
  },
  inputParamsSchema
}

export default tool