import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique bill payment identifier in Asaas")
}