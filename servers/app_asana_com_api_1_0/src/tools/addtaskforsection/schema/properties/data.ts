import { z } from "zod"

export const inputParamsSchema = {
  "task": z.string().describe("The task to add to this section."),
  "insert_before": z.string().describe("An existing task within this section before which the added task should be inserted. Cannot be provided together with insert_after.").optional(),
  "insert_after": z.string().describe("An existing task within this section after which the added task should be inserted. Cannot be provided together with insert_before.").optional()
}