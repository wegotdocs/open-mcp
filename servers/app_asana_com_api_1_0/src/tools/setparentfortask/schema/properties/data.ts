import { z } from "zod"

export const inputParamsSchema = {
  "parent": z.string().describe("The new parent of the task, or `null` for no parent."),
  "insert_after": z.string().describe("A subtask of the parent to insert the task after, or `null` to insert at the beginning of the list.").optional(),
  "insert_before": z.string().describe("A subtask of the parent to insert the task before, or `null` to insert at the end of the list.").optional()
}