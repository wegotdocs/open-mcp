import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontracts",
  "toolDescription": "List Whitelisted Contracts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool