export { inputParams } from "./schema/root.js"

export const toolName = `put_admin_realms_realm_events_config`
export const toolDescription = `Update the events provider Change the events provider and/or its configuration`
export const baseUrl = `https://api.example.com`
export const path = `/admin/realms/{realm}/events/config`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "eventsEnabled",
    "eventsExpiration",
    "eventsListeners",
    "enabledEventTypes",
    "adminEventsEnabled",
    "adminEventsDetailsEnabled"
  ]
}
export const flatMap = {}