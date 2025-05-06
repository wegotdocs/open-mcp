import { z } from "zod"

export const inputParamsSchema = {
  "assignment_id": z.number().int().describe("The unique identifier of the classroom assignment.")
}