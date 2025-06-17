import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().email().describe("Email")
}