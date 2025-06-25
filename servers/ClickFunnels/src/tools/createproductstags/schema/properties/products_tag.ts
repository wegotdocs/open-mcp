import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "color": z.string().describe("The color of the product tag").optional()
}