import { z } from "zod"

export const inputParamsSchema = {
  "business_id": z.string().describe("Business ID"),
  "type": z.enum(["CREDENTIALS_RP","CREDENTIALS_BANK","NOT_PRIVATE"]).describe("Note type filter").optional()
}