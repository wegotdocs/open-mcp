import { z } from "zod"

export const inputParamsSchema = {
  "pa_id": z.string().describe("A unique identifier for a partner attachment.")
}