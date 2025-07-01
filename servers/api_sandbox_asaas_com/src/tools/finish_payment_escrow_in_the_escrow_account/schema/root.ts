import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique payment escrow identifier in Asaas")
}