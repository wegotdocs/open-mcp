import { z } from "zod"

export const inputParamsSchema = {
  "num_pools": z.number().int().gte(1).describe("Number of pools to retrieve. Default is 10.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter pools by.").optional(),
  "stablecoin": z.boolean().describe("Flag indicating whether to filter for stablecoin yield pools.").optional(),
  "token": z.string().describe("Token or token pair to filter pools by.").optional(),
  "single_sided": z.boolean().describe("Flag indicating whether to filter for single-sided yield pools.").optional(),
  "outlook": z.enum(["stable","up","down"]).describe("Future outlook for the yield of this pool.").optional()
}