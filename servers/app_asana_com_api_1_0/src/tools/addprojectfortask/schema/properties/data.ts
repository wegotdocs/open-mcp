import { z } from "zod"

export const inputParamsSchema = {
  "project": z.string().describe("The project to add the task to."),
  "insert_after": z.string().nullable().describe("A task in the project to insert the task after, or `null` to insert at the beginning of the list.").optional(),
  "insert_before": z.string().nullable().describe("A task in the project to insert the task before, or `null` to insert at the end of the list.").optional(),
  "section": z.string().nullable().describe("A section in the project to insert the task into. The task will be inserted at the bottom of the section.").optional()
}