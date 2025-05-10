import { z } from "zod"

export const inputParamsSchema = {
  "icon": z.boolean().describe("If set, return the icons.").optional(),
  "q": z.string().describe("This is an example.").optional()
}