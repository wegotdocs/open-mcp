import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "searchtickets",
  "toolDescription": "Find Ticket",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q",
      "statuses": "statuses",
      "networkId": "networkId",
      "createdByMe": "createdByMe",
      "expiresAfter": "expiresAfter",
      "expiresBefore": "expiresBefore",
      "type": "type",
      "externalRefId": "externalRefId",
      "after": "after",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool