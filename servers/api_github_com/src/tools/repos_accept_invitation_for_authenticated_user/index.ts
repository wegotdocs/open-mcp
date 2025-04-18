import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_accept_invitation_for_authenticated_user",
  "toolDescription": "Accept a repository invitation",
  "baseUrl": "https://api.github.com",
  "path": "/user/repository_invitations/{invitation_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "invitation_id": "invitation_id"
    }
  },
  inputParamsSchema
}

export default tool