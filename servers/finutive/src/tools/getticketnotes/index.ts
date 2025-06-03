import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getticketnotes",
  "toolDescription": "Get all the notes in a ticket",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/tickets/{ticketId}/notes",
  "method": "get",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    }
  },
  inputParamsSchema
}

export default tool