import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getotastatus",
  "toolDescription": "Returns current OTA status",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/management/ota",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool