import { z } from "zod"

export const inputParamsSchema = {
  "classroom_id": z.number().int().describe("The unique identifier of the classroom.")
}