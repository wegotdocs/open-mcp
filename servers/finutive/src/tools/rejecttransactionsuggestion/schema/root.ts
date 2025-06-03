import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "suggestion_id": z.string().describe("Suggestion ID")
}