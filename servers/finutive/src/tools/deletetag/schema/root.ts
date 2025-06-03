import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string().describe("Business ID"),
  "tagId": z.string().describe("ID of the tag to delete")
}