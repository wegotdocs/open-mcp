import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "copilot_get_copilot_organization_details",
  "toolDescription": "Get Copilot seat information and settings for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/copilot/billing",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool