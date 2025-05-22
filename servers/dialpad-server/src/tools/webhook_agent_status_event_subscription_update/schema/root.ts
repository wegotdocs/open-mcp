import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The event subscription's ID, which is generated after creating an event subscription successfully."),
  "agent_type": z.literal("callcenter").nullable().describe("The agent type this event subscription subscribes to.").optional(),
  "enabled": z.boolean().nullable().describe("Whether or not the this agent status event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully. If you plan to pair this event subscription with another logging endpoint,\nplease provide a valid webhook ID here.").optional()
}