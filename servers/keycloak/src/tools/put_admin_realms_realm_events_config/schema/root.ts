import { z } from "zod"

export const inputParams = {
  "eventsEnabled": z.boolean().optional(),
  "eventsExpiration": z.number().int().optional(),
  "eventsListeners": z.array(z.string()).optional(),
  "enabledEventTypes": z.array(z.string()).optional(),
  "adminEventsEnabled": z.boolean().optional(),
  "adminEventsDetailsEnabled": z.boolean().optional()
}