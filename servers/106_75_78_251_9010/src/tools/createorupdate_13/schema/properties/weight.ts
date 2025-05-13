import { z } from "zod"

export const inputParamsSchema = {
  "grossWeight": z.number().int().describe("毫克(mg)").optional(),
  "netWeight": z.number().int().describe("毫克(mg)").optional()
}