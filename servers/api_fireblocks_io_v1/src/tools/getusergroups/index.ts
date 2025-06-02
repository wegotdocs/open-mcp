import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusergroups",
  "toolDescription": "List user groups",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/user_groups",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool