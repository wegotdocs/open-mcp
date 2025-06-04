import { z } from "zod"

export const inputParamsSchema = {
  "test": z.number().int().describe("test only mode, using test issuer").optional()
}