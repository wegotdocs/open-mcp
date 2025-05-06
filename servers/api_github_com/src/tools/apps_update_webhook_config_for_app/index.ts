import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_update_webhook_config_for_app",
  "toolDescription": "Update a webhook configuration for an app",
  "baseUrl": "https://api.github.com",
  "path": "/app/hook/config",
  "method": "patch",
  "security": [],
  "paramsMap": {
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