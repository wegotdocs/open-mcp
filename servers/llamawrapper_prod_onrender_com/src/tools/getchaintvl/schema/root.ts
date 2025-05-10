import { z } from "zod"

export const inputParamsSchema = {
  "chain": z.string().describe("Name of the chain or L2 to retrieve TVL for.").optional()
}