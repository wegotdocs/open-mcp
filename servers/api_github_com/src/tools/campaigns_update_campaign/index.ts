import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "campaigns_update_campaign",
  "toolDescription": "Update a campaign",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/campaigns/{campaign_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "campaign_number": "campaign_number"
    },
    "body": {
      "name": "name",
      "description": "description",
      "managers": "managers",
      "team_managers": "team_managers",
      "ends_at": "ends_at",
      "contact_link": "contact_link",
      "state": "state"
    }
  },
  inputParamsSchema
}

export default tool