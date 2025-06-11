import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update",
  "toolDescription": "Update ticket",
  "baseUrl": "https://api.example.com",
  "path": "/v2/ticketing/ticket/{ticketId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "sessionKey",
      "value": "<mcp-env-var>SESSIONKEY</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONKEY"
    }
  ],
  "paramsMap": {
    "path": {
      "ticketId": "ticketId"
    },
    "body": {
      "version": "version",
      "clientId": "clientId",
      "ticketFormId": "ticketFormId",
      "locationId": "locationId",
      "nodeId": "nodeId",
      "subject": "subject",
      "status": "status",
      "type": "type",
      "cc": "cc",
      "assignedAppUserId": "assignedAppUserId",
      "requesterUid": "requesterUid",
      "severity": "severity",
      "priority": "priority",
      "parentTicketId": "parentTicketId",
      "tags": "tags",
      "attributes": "attributes"
    }
  },
  inputParamsSchema
}

export default tool