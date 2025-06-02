import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setexternalrefid",
  "toolDescription": "Add external ref. ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}/external-id",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    },
    "body": {
      "externalRefId": "externalRefId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool