import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("Tenant ID")
}