import { z } from "zod"

export const inputParamsSchema = {
  "atomId": z.string().describe("The ID of the Runtime.").optional(),
  "logDate": z.string().describe("The date of the logged events.").optional()
}