import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findticketbyid",
  "toolDescription": "Search Ticket by ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/smart-transfers/{ticketId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    }
  },
  inputParamsSchema
}

export default tool