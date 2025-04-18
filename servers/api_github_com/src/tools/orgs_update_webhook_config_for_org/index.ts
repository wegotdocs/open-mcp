import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_update_webhook_config_for_org",
  "toolDescription": "Update a webhook configuration for an organization",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}/config",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "hook_id": "hook_id"
    },
    "body": {
      "url": "url",
      "content_type": "content_type",
      "secret": "secret",
      "insecure_ssl": "insecure_ssl"
    }
  },
  inputParamsSchema
}

export default tool