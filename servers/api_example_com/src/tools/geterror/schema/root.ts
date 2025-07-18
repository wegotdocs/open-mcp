import { z } from "zod"

export const inputParamsSchema = {
  "errorId": z.number().int().describe("Give the error by ID.")
}