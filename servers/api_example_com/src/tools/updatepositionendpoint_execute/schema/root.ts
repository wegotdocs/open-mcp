import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("Position ID"),
  "name": z.string().describe("Position name").optional()
}