import { z } from "zod"

export const inputParamsSchema = {
  "status": z.enum(["available","pending","sold"]).describe("Status values that need to be considered for filter").optional()
}