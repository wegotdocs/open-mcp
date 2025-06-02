import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setticketexpiration",
  "toolDescription": "Set expiration",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}/expires-in",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    },
    "body": {
      "expiresIn": "expiresIn"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool