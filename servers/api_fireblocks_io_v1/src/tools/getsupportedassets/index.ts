import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getsupportedassets",
  "toolDescription": "Legacy - List Assets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/supported_assets",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool