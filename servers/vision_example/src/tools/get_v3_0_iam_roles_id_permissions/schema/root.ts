import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(36).describe("The unique identifier of a role")
}