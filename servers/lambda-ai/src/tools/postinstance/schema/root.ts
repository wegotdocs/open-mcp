import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The unique identifier (ID) of the instance"),
  "name": z.string().min(0).max(64).describe("The new, user-provided name for the instance.").optional()
}