import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_remove_restrictions_for_org",
  "toolDescription": "Remove interaction restrictions for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/interaction-limits",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    }
  },
  inputParamsSchema
}

export default tool