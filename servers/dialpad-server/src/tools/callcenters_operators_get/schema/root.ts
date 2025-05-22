import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The call center's id.")
}