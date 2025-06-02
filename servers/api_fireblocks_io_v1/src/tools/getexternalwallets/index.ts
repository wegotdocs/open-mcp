import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexternalwallets",
  "toolDescription": "List external wallets",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool