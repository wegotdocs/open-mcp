import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_create_invitation",
  "toolDescription": "Create an organization invitation",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/invitations",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "invitee_id": "invitee_id",
      "email": "email",
      "role": "role",
      "team_ids": "team_ids"
    }
  },
  inputParamsSchema
}

export default tool