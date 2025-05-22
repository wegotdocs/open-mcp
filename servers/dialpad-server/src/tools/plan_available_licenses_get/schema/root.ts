import { z } from "zod"

export const inputParamsSchema = {
  "office_id": z.number().int().describe("The office's id.")
}