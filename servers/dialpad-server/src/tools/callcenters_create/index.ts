import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "callcenters_create",
  "toolDescription": "Call Centers -- Create",
  "baseUrl": "https://dialpad.com",
  "path": "/api/v2/callcenters",
  "method": "post",
  "security": [
    {
      "key": "apikey",
      "value": "<mcp-env-var>APIKEY</mcp-env-var>",
      "in": "query",
      "envVarName": "APIKEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "advanced_settings": "advanced_settings",
      "alerts": "alerts",
      "friday_hours": "friday_hours",
      "group_description": "group_description",
      "hold_queue": "hold_queue",
      "hours_on": "hours_on",
      "monday_hours": "monday_hours",
      "name": "name",
      "office_id": "office_id",
      "ring_seconds": "ring_seconds",
      "routing_options": "routing_options",
      "saturday_hours": "saturday_hours",
      "sunday_hours": "sunday_hours",
      "thursday_hours": "thursday_hours",
      "tuesday_hours": "tuesday_hours",
      "voice_intelligence": "voice_intelligence",
      "wednesday_hours": "wednesday_hours"
    }
  },
  inputParamsSchema
}

export default tool