import { z } from "zod"

export const inputParamsSchema = {
  "uuid": z.string().describe("Indexing job id")
}