import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique recurrence item identifier in Asaas")
}