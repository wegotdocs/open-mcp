import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getgasstationinfo",
  "toolDescription": "Get gas station settings",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/gas_station",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool