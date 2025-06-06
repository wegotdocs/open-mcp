import { z } from "zod"

export const inputParamsSchema = {
  "order_id": z.number().int().describe("The order ID."),
  "note": z.string().describe("Order note content.").optional(),
  "customer_note": z.boolean().describe("If true, the note will be shown to customers and they will be notified. If false, the note will be for admin reference only.").optional(),
  "added_by_user": z.boolean().describe("If true, this note will be attributed to the current user. If false, the note will be attributed to the system.").optional()
}