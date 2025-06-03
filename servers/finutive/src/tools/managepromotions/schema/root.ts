import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business identifier"),
  "type": z.enum(["MGM","FUNNEL_ONBOARDING"]).describe("Type of promotion to manage")
}