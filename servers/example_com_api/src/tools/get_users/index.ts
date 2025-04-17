import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_users",
  "toolDescription": "Get a list of users",
  "baseUrl": "https://example.com/api",
  "path": "/users",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool