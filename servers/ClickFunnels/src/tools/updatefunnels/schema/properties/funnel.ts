import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the Funnel").optional(),
  "live_mode": z.union([z.boolean().describe("In Live Mode your Funnel cannot be tested and will process live payments"), z.null().describe("In Live Mode your Funnel cannot be tested and will process live payments")]).describe("In Live Mode your Funnel cannot be tested and will process live payments").optional()
}