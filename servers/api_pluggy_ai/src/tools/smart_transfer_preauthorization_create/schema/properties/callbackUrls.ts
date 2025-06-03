import { z } from "zod"

export const inputParamsSchema = {
  "success": z.string().describe("Url to be redirected after the preauthorization was completed").optional(),
  "error": z.string().describe("Url to be redirected after the preauthorization ended in error status").optional()
}