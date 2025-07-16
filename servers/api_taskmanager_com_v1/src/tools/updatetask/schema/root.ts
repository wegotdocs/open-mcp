import { z } from "zod"

export const inputParamsSchema = {
  "taskId": z.string().uuid().describe("ID of the task to update"),
  "title": z.string().max(200).describe("Task title").optional(),
  "description": z.string().max(1000).describe("Detailed description of the task").optional(),
  "status": z.enum(["pending","in_progress","completed","cancelled"]).describe("Current status of the task").optional(),
  "priority": z.enum(["low","medium","high","urgent"]).describe("Priority level of the task").optional(),
  "assigned_to": z.string().uuid().describe("ID of the user to assign this task to").optional(),
  "due_date": z.string().datetime({ offset: true }).describe("Due date and time for the task").optional(),
  "tags": z.array(z.string()).describe("Tags to associate with the task").optional()
}