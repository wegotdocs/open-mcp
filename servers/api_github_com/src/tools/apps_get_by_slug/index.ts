import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_by_slug",
  "toolDescription": "Get an app",
  "baseUrl": "https://api.github.com",
  "path": "/apps/{app_slug}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "app_slug": "app_slug"
    }
  },
  inputParamsSchema
}

export default tool