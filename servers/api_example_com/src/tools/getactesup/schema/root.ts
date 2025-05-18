import { z } from "zod"

export const inputParamsSchema = {
  "partition": z.string().describe("Partition GPU du document").optional()
}