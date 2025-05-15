import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.number().int().describe("ID of the business to delete")
}