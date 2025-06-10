import { z } from "zod"

export const inputParamsSchema = {
  "project": z.string().describe("The project to remove the task from.")
}