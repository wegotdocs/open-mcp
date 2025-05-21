import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Feature name"),
  "code": z.enum(["ai-reports","denunciations","faqs","feedback","feelings","news","phrases","surveys"]).describe("Feature code")
}