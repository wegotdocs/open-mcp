import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The API call router's ID"),
  "default_target_id": z.number().int().nullable().describe("The ID of the target that should be used as a fallback destination for calls if the call router is disabled or fails.").optional(),
  "default_target_type": z.enum(["callcenter","callrouter","channel","coachinggroup","coachingteam","department","office","room","staffgroup","unknown","user"]).nullable().describe("The entity type of the default target.").optional(),
  "enabled": z.boolean().nullable().describe("If set to False, the call router will skip the routing url and instead forward calls straight to the default target.").optional(),
  "name": z.string().nullable().describe("[single-line only]\n\nA human-readable display name for the router.").optional(),
  "office_id": z.number().int().nullable().describe("The ID of the office to which this router belongs.").optional(),
  "reset_error_count": z.boolean().nullable().describe("Sets the auto-disablement routing error count back to zero.\n\nCall routers maintain a count of the number of errors that have occured within the past hour, and automatically become disabled when that count exceeds 10.\n\nSetting enabled to true via the API will not reset that count, which means that the router will likely become disabled again after one more error. In most cases, this will be useful for testing fixes in your routing API, but in some circumstances it may be desirable to reset that counter.").optional(),
  "routing_url": z.string().nullable().describe("The URL that should be used to drive call routing decisions.").optional(),
  "secret": z.string().nullable().describe("[single-line only]\n\nThe call router's signature secret. This is a plain text string that you should generate with a minimum length of 32 characters.").optional()
}