import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add",
  "toolDescription": "Add event to activity",
  "baseUrl": "https://api-crm.inmobalia.com/v1",
  "path": "/v1/activities/{activityId}/event",
  "method": "post",
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
      "startDateTime": "startDateTime",
      "endDateTime": "endDateTime",
      "startDate": "startDate",
      "endDate": "endDate",
      "timezone": "timezone",
      "allDay": "allDay",
      "reminder": "reminder",
      "description": "description"
    }
  },
  inputParamsSchema
}

export default tool