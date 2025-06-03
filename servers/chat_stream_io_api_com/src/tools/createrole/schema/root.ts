import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().max(64).describe("Role name")
}