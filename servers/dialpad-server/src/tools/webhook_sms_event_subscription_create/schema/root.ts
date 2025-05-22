import { z } from "zod"

export const inputParamsSchema = {
  "direction": z.enum(["all","inbound","outbound"]).nullable().describe("The SMS direction this event subscription subscribes to."),
  "enabled": z.boolean().nullable().describe("Whether or not the SMS event subscription is enabled.").optional(),
  "endpoint_id": z.number().int().nullable().describe("The logging endpoint's ID, which is generated after creating a webhook or websocket successfully.").optional(),
  "include_internal": z.boolean().nullable().describe("Whether or not to trigger SMS events for SMS sent between two users from the same company.").optional(),
  "status": z.boolean().nullable().describe("Whether or not to update on each SMS delivery status.").optional(),
  "target_id": z.number().int().nullable().describe("The ID of the specific target for which events should be sent.").optional(),
  "target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The target's type.").optional()
}