import { z } from "zod"

export const inputParamsSchema = {
  "attempts": z.array(z.object({ "scheduleInstruction": z.object({ "method": z.enum(["auto","immediately","date-interval","day-of-month","day-of-week"]) }).describe("The calculation instruction of scheduled time"), "paymentInstruction": z.object({ "method": z.enum(["none","partial","discount"]) }) })).min(1),
  "afterAttemptPolicy": z.enum(["none","change-subscription-renewal-time"]).describe("The policy on the attempt finishes"),
  "afterRetryEndPolicy": z.enum(["none","cancel-subscription"]).describe("The policy on the retry ends")
}