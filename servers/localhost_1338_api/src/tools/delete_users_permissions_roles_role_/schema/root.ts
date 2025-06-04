import { z } from "zod"

export const inputParamsSchema = {
  "role": z.string().describe("role Id")
}