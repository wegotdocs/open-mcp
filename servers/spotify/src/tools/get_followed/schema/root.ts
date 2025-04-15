import { z } from "zod"

export const inputParamsSchema = {
  "type": z.literal("artist").describe("The ID type: currently only `artist` is supported.\n"),
  "after": z.string().describe("The last artist ID retrieved from the previous request.\n").optional(),
  "limit": z.number().int().gte(1).lte(50).describe("The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.\n").optional()
}