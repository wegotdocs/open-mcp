import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the funnel tag"),
  "color": z.string().describe("The color of the funnel tag").optional()
}