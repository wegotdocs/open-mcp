import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createticket",
  "toolDescription": "Create Ticket",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "createdByNetworkId": "createdByNetworkId",
      "type": "type",
      "expiresIn": "expiresIn",
      "terms": "terms",
      "externalRefId": "externalRefId",
      "note": "note",
      "submit": "submit"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool