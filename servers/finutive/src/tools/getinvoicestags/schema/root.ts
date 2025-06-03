import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Initiative ID"),
  "name": z.string().describe("Tag name filter").optional()
}