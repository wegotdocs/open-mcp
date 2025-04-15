import { z } from "zod"

export const inputParamsSchema = {
  "purpose": z.string().describe("Only return files with the given purpose.").optional()
}