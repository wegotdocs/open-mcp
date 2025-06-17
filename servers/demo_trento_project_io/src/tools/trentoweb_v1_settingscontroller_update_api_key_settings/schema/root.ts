import { z } from "zod"

export const inputParamsSchema = {
  "expire_at": z.string().datetime({ offset: true }).nullable().describe("The expire date of api key")
}