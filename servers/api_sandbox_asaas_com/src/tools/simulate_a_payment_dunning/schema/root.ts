import { z } from "zod"

export const inputParamsSchema = {
  "payment": z.string().describe("Unique billing identifier in Asaas").optional()
}