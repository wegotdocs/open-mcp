import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_authenticated",
  "toolDescription": "Get the authenticated app",
  "baseUrl": "https://api.github.com",
  "path": "/app",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool