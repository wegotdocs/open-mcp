import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the new task. If not provided, the name of the task template will be used.").optional()
}