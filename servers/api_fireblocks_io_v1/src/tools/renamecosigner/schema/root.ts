import { z } from "zod"

export const inputParamsSchema = {
  "cosignerId": z.string().uuid().describe("The unique identifier of the cosigner"),
  "name": z.string().describe("The new name of the cosigner").optional()
}