import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcontract",
  "toolDescription": "Find a Specific Whitelisted Contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts/{contractId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractId": "contractId"
    }
  },
  inputParamsSchema
}

export default tool