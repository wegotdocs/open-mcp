import { z } from "zod"

export const inputParamsSchema = {
  "Accept": z.enum(["application/json","application/pdf"]).describe("The response media type").optional()
}