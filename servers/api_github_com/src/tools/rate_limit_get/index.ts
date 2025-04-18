import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rate_limit_get",
  "toolDescription": "Get rate limit status for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/rate_limit",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool