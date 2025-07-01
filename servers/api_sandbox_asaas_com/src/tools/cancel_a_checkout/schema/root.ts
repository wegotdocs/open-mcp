import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of checkout in Asaas")
}