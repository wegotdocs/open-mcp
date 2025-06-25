import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the funnel tag").optional(),
  "color": z.string().describe("The color of the funnel tag").optional()
}