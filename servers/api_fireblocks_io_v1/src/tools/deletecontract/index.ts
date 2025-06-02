import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletecontract",
  "toolDescription": "Delete a contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts/{contractId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "contractId": "contractId"
    }
  },
  inputParamsSchema
}

export default tool