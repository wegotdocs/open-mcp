import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_cancel_invitation",
  "toolDescription": "Cancel an organization invitation",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/invitations/{invitation_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "invitation_id": "invitation_id"
    }
  },
  inputParamsSchema
}

export default tool