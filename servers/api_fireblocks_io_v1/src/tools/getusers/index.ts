import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusers",
  "toolDescription": "List users",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/users",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool