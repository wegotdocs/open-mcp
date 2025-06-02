import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getfiataccounts",
  "toolDescription": "List fiat accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/fiat_accounts",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool