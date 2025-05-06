import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "campaigns_get_campaign_summary",
  "toolDescription": "Get a campaign for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/campaigns/{campaign_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "campaign_number": "campaign_number"
    }
  },
  inputParamsSchema
}

export default tool