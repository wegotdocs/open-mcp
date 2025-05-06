import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_set_restrictions_for_org",
  "toolDescription": "Set interaction restrictions for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/interaction-limits",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "body": {
      "limit": "limit",
      "expiry": "expiry"
    }
  },
  inputParamsSchema
}

export default tool