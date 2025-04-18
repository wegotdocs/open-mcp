import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "users_get_authenticated",
  "toolDescription": "Get the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool