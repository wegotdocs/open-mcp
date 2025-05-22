import { z } from "zod"

export const inputParamsSchema = {
  "ivr_id": z.string().describe("The ID of the custom ivr to be updated."),
  "description": z.string().nullable().describe("[single-line only]\n\nThe description of the IVR.").optional(),
  "name": z.string().nullable().describe("[single-line only]\n\nThe name of this IVR.").optional()
}