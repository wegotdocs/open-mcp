import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().gte(0).describe("Fine value"),
  "type": z.enum(["PERCENTAGE","FIXED"]).describe("Type of fine calculation")
}