import { z } from "zod"

export const inputParamsSchema = {
  "statement_id": z.string().describe("Census statement ID")
}