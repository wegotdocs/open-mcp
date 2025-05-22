import { z } from "zod"

export const inputParamsSchema = {
  "default_target_id": z.number().int().nullable().describe("The ID of the target that should be used as a fallback destination for calls if the call router is disabled or fails."),
  "default_target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The entity type of the default target."),
  "enabled": z.boolean().nullable().describe("If set to False, the call router will skip the routing url and instead forward calls straight to the default target.").optional(),
  "name": z.string().nullable().describe("[single-line only]\n\nA human-readable display name for the router."),
  "office_id": z.number().int().nullable().describe("The ID of the office to which this router belongs."),
  "routing_url": z.string().nullable().describe("The URL that should be used to drive call routing decisions."),
  "secret": z.string().nullable().describe("[single-line only]\n\nThe call router's signature secret. This is a plain text string that you should generate with a minimum length of 32 characters.").optional()
}