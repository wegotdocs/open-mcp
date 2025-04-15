import { z } from "zod"

export const inputParamsSchema = {
  "vcu": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("VCU limit"),
  "usd": z.union([z.number().gte(0), z.any().nullable(), z.any().nullable()]).describe("USD limit")
}