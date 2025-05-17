import { z } from "zod"

export const inputParamsSchema = {
  "location": z.string().describe("Location for which to retrieve weather information.")
}