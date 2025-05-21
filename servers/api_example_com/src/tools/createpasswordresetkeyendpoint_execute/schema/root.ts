import { z } from "zod"

export const inputParamsSchema = {
  "userEmail": z.string().describe("User Email")
}