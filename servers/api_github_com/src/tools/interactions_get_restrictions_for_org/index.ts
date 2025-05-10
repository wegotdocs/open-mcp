import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "interactions_get_restrictions_for_org",
  "toolDescription": "Get interaction restrictions for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/interaction-limits",
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