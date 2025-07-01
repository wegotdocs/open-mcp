import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier for your payments link in Asaas")
}