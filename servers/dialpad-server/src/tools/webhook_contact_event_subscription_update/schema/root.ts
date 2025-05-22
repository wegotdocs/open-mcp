import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The event subscription's ID, which is generated after creating an event subscription successfully."),
  "contact_type": z.enum(["local","shared"]).nullable().describe("The contact type this event subscription subscribes to."),
  "enabled": z.boolean().nullable().describe("Whether or not the contact event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint,\nplease provide a valid webhook ID here.").optional()
}