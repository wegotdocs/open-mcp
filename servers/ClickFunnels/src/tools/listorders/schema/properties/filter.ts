import { z } from "zod"

export const inputParamsSchema = {
  "contact_id": z.string().describe("A comma-separated list of Contact IDs to filter by.").optional(),
  "id": z.string().describe("A comma-separated list of Order IDs to filter by.").optional(),
  "order_type": z.enum(["subscription-order","one-time-order"]).describe("The order type to filter by.").optional()
}