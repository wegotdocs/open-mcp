import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique Pix key identifier in Asaas")
}