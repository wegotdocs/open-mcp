import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The schedule reports subscription's ID.")
}