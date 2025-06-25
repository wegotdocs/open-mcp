import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name"),
  "color": z.string().describe("Tag Color").optional()
}