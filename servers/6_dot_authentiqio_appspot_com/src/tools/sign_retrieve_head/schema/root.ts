import { z } from "zod"

export const inputParamsSchema = {
  "job": z.string().describe("Job ID (20 chars)")
}