import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_get_webhook_config_for_org",
  "toolDescription": "Get a webhook configuration for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}/config",
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