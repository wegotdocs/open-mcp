import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Email, Username, Name, Phone Number, anything ").optional()
}