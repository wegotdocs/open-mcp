import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmpckeyslist",
  "toolDescription": "Get list of mpc keys",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/keys/mpc/list",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool