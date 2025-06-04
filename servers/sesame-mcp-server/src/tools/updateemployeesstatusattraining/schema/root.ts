import { z } from "zod"

export const inputParamsSchema = {
  "assignId": z.string().uuid().describe("Assign ID"),
  "status": z.enum(["rejected","pending","in_progress","completed"]).optional()
}