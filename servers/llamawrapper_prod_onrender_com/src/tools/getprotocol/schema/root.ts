import { z } from "zod"

export const inputParamsSchema = {
  "slug": z.string().describe("Used to filter protocols by their slug.")
}