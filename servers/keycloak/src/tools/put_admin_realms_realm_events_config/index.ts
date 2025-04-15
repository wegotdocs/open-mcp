import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_events_config",
  "toolDescription": "Update the events provider Change the events provider and/or its configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/events/config",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "eventsEnabled": "eventsEnabled",
      "eventsExpiration": "eventsExpiration",
      "eventsListeners": "eventsListeners",
      "enabledEventTypes": "enabledEventTypes",
      "adminEventsEnabled": "adminEventsEnabled",
      "adminEventsDetailsEnabled": "adminEventsDetailsEnabled"
    }
  },
  inputParamsSchema
}

export default tool