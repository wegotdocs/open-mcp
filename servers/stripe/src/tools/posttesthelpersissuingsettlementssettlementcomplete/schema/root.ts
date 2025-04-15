import { z } from "zod"

export const inputParamsSchema = {
  "settlement": z.string().max(5000).describe("The settlement token to mark as complete.")
}