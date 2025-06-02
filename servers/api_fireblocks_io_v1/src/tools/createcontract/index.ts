import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createcontract",
  "toolDescription": "Create a contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contracts",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "name": "name"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool