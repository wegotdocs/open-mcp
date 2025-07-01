import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique recurrence identifier in Asaas")
}