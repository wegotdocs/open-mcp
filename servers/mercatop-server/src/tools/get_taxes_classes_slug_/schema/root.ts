import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().describe("Unique slug for the resource.")
}