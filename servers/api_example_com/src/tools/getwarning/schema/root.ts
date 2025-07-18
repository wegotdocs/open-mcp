import { z } from "zod"

export const inputParamsSchema = {
  "warningId": z.number().int().describe("Give the error by ID.")
}