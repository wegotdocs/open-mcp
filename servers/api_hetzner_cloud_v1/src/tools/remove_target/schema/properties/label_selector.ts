import { z } from "zod"

export const inputParamsSchema = {
  "selector": z.string().describe("Label selector | The selector.")
}