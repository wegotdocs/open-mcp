import { z } from "zod"

export const inputParamsSchema = {
  "column_id": z.number().int().describe("The unique identifier of the column.")
}