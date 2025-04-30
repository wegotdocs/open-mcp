import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant use default if not known")
}