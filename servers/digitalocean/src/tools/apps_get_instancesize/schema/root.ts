import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().describe("The slug of the instance size")
}