import { z } from "zod"

export const inputParamsSchema = {
  "blocking": z.enum(["no_wait","wait"]).describe("Blocking determines whether the request should wait for the processing to complete (synchronous) or not (asynchronous).").optional(),
  "contacts": z.array(z.string()).describe("Array of contact phone numbers. The numbers can be in any standard telephone number format."),
  "force_check": z.boolean().describe("Force check determines whether the request should check the contact even if it is already in the cache.").optional()
}