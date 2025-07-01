import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique report identifier in Asaas")
}