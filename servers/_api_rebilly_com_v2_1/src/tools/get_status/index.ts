import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_status",
  "toolDescription": "Retrieve API current status",
  "baseUrl": "//api.rebilly.com/v2.1",
  "path": "/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool