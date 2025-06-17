import { z } from "zod"

export const inputParamsSchema = {
  "unit": z.enum(["day","week","month","year"]).describe("The retention duration unit, that is used in conjunction with the retention time period."),
  "value": z.number().int().gte(1).describe("The integer retention duration, that is used in conjunction with the retention time unit.")
}