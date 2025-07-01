import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique customer identifier in Asaas")
}