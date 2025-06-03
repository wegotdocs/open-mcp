import { z } from "zod"

export const inputParamsSchema = {
  "hash": z.string().describe("Survey hash")
}