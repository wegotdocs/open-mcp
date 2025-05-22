import { z } from "zod"

export const inputParamsSchema = {
  "agent_type": z.literal("callcenter").nullable().describe("The agent type this event subscription subscribes to."),
  "enabled": z.boolean().nullable().describe("Whether or not the this agent status event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully.").optional()
}