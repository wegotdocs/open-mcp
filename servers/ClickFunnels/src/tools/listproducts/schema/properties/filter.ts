import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of product IDs to filter by.").optional(),
  "visible_in_store": z.union([z.literal(true), z.literal(false)]).describe("Filter products by visibility in the online store.").optional(),
  "visible_in_customer_center": z.union([z.literal(true), z.literal(false)]).describe("Filter products by visibility in the customer center.").optional(),
  "archived": z.union([z.literal(true), z.literal(false)]).describe("Filter products by archived state.").optional()
}