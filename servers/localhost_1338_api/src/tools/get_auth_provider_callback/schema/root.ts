import { z } from "zod"

export const inputParamsSchema = {
  "provider": z.string().describe("Provider name")
}