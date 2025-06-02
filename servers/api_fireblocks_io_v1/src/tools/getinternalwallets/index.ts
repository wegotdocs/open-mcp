import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinternalwallets",
  "toolDescription": "List internal wallets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool