import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(19).describe("Task ID")
}