import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique subscription identifier in Asaas")
}