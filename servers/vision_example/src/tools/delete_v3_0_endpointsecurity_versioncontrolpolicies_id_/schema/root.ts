import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().min(1).max(1024).describe("The ID of the policy")
}