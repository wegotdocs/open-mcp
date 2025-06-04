import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Department ID")
}