import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of price IDs to filter by.").optional(),
  "variant_id": z.string().describe("A comma-separated list of variant IDs to filter by.").optional(),
  "visible": z.union([z.literal(true), z.literal(false)]).describe("Filter prices by visibility in the online store.").optional(),
  "archived": z.union([z.literal(true), z.literal(false)]).describe("Filter prices by archived state.").optional()
}