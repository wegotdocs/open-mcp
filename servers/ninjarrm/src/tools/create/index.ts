import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create",
  "toolDescription": "Create ticket",
  "baseUrl": "https://app.ninjarmm.com/v2/",
  "path": "/v2/ticketing/ticket",
  "method": "post",
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
    "body": {
      "clientId": "clientId",
      "ticketFormId": "ticketFormId",
      "locationId": "locationId",
      "nodeId": "nodeId",
      "subject": "subject",
      "description": "description",
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