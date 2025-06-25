import { z } from "zod"

export const inputParamsSchema = {
  "contact_id": z.union([z.number().int().describe("Contact"), z.null().describe("Contact")]).describe("Contact").optional()
}