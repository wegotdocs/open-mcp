import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(36).describe("Unique numeric string that identifies a response task")
}