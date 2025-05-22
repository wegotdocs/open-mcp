import { z } from "zod"

export const inputParamsSchema = {
  "parent_id": z.number().int().describe("The room's id.")
}