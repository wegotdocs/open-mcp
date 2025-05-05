import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("use 'all' for all indexes")
}