import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The room's id.")
}