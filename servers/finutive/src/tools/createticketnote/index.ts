import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createticketnote",
  "toolDescription": "create a note in a ticket",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/tickets/{ticketId}/notes",
  "method": "post",
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
    },
    "body": {
      "text": "text",
      "docs": "docs"
    }
  },
  inputParamsSchema
}

export default tool