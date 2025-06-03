import { z } from "zod"

export const inputParamsSchema = {
  "password": z.string().describe("User's current password")
}