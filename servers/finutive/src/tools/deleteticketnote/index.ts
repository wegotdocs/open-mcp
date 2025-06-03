import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteticketnote",
  "toolDescription": "Delete a note in a ticket",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/tickets/{ticketId}/notes/{noteId}",
  "method": "delete",
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
      "ticketId": "ticketId",
      "noteId": "noteId"
    }
  },
  inputParamsSchema
}

export default tool