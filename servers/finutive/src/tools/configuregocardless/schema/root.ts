import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID to configure GoCardless for")
}