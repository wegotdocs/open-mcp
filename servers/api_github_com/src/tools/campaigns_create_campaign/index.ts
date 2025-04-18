import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "campaigns_create_campaign",
  "toolDescription": "Create a campaign for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/campaigns",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "name": "name",
      "description": "description",
      "managers": "managers",
      "team_managers": "team_managers",
      "ends_at": "ends_at",
      "contact_link": "contact_link",
      "code_scanning_alerts": "code_scanning_alerts",
      "generate_issues": "generate_issues"
    }
  },
  inputParamsSchema
}

export default tool