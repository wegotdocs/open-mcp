import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_webhook_config_for_app",
  "toolDescription": "Get a webhook configuration for an app",
  "baseUrl": "https://api.github.com",
  "path": "/app/hook/config",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool