import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createentityevent",
  "toolDescription": "Create a new event for an entity",
  "baseUrl": "https://api.kanka.io/1.0",
  "path": "/campaigns/{campaignId}/entities/{entityId}/entity_events",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "body": {
      "calendar_id": "calendar_id",
      "event_id": "event_id",
      "date": "date",
      "comment": "comment",
      "is_private": "is_private"
    }
  },
  inputParamsSchema
}

export default tool