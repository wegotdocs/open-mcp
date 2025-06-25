import { z } from "zod"

export const inputParamsSchema = {
  "notes": z.union([z.string().describe("Your internal note about the order. This will be visible in ClickFunnels admin orders-related sections."), z.null().describe("Your internal note about the order. This will be visible in ClickFunnels admin orders-related sections.")]).describe("Your internal note about the order. This will be visible in ClickFunnels admin orders-related sections.").optional()
}