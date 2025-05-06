import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_actions_cache_usage_for_org",
  "toolDescription": "Get GitHub Actions cache usage for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/actions/cache/usage",
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