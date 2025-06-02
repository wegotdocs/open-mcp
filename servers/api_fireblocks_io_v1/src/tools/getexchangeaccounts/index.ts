import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangeaccounts",
  "toolDescription": "List exchange accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool