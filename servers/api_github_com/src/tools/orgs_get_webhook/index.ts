import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_webhook",
  "toolDescription": "Get an organization webhook",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hook_id": "hook_id"
    }
  },
  inputParamsSchema
}

export default tool