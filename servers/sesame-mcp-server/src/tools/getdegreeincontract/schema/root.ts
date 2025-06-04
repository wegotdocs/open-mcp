import { z } from "zod"

export const inputParamsSchema = {
  "degreeId": z.string().uuid().describe("Degree ID")
}