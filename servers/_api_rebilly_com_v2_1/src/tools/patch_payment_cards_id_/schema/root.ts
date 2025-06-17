import { z } from "zod"

export const inputParamsSchema = {
  "cvv": z.string().describe("Card's cvv (card verification value).").optional()
}