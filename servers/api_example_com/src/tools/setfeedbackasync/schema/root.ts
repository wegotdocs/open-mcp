import { z } from "zod"

export const inputParamsSchema = {
  "typeFeedback": z.union([z.literal(0), z.literal(1)]).optional(),
  "reasonKO": z.string().nullable().describe("Reason for a negative feedback. Null if feedback is not negative.").optional(),
  "conversationResponseId": z.number().int().describe("Internal response identifier to associate the feedback").optional()
}