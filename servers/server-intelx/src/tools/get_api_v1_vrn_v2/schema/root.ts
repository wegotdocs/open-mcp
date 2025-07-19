import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().describe("Must be valid VRN").optional()
}