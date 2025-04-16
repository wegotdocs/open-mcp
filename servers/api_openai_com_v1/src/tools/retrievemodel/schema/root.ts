import { z } from "zod"

export const inputParamsSchema = {
  "model": z.string().describe("The ID of the model to use for this request")
}