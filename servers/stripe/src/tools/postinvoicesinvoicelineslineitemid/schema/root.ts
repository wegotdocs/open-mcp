import { z } from "zod"

export const inputParamsSchema = {
  "invoice": z.string().max(5000).describe("Invoice ID of line item"),
  "line_item_id": z.string().max(5000).describe("Invoice line item ID")
}