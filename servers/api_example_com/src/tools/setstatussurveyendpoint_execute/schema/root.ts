import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Survey ID"),
  "status": z.boolean().describe("Set status of the survey")
}