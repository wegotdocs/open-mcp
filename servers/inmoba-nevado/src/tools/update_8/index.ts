import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_8",
  "toolDescription": "Update activity",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/activities/{activityId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "OAUTH2_TOKEN"
    }
  ],
  "paramsMap": {
    "path": {
      "activityId": "activityId"
    },
    "body": {
      "type": "type",
      "subject": "subject",
      "details": "details",
      "responsible": "responsible",
      "contactMain": "contactMain",
      "users": "users",
      "contacts": "contacts",
      "bookings": "bookings",
      "developments": "developments",
      "properties": "properties"
    }
  },
  inputParamsSchema
}

export default tool