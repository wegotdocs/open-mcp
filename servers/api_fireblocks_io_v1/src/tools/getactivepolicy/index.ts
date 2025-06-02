import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getactivepolicy",
  "toolDescription": "Get the active policy and its validation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tap/active_policy",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool