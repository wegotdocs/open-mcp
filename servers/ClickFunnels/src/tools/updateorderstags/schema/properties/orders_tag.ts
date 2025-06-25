import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Tag Name").optional(),
  "color": z.string().describe("Tag Color").optional()
}