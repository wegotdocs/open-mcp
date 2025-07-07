import { z } from "zod"

export const inputParamsSchema = {
  "collection": z.string().describe("NFT collection address"),
  "limit": z.union([z.literal(10), z.literal(20), z.literal(30), z.literal(40)]).describe("Number of items to return").optional(),
  "offset": z.number().int().describe("Number of items to skip").optional()
}