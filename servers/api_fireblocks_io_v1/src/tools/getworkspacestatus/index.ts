import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getworkspacestatus",
  "toolDescription": "Returns current workspace status",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/workspace_status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool