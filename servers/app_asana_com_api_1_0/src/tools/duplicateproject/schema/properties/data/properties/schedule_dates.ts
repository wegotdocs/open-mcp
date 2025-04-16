import { z } from "zod"

export const inputParamsSchema = {
  "should_skip_weekends": z.boolean().describe("Determines if the auto-shifted dates should skip weekends."),
  "due_on": z.string().describe("Sets the last due date in the duplicated project to the given date. The rest of the due dates will be offset by the same amount as the due dates in the original project.").optional(),
  "start_on": z.string().describe("Sets the first start date in the duplicated project to the given date. The rest of the start dates will be offset by the same amount as the start dates in the original project.").optional()
}