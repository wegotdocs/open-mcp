import { z } from "zod"

export const inputParamsSchema = {
  "model": z.string().describe("The model to delete")
}