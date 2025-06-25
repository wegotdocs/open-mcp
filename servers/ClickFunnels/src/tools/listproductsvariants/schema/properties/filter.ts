import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of variant IDs to filter by.").optional(),
  "visible": z.union([z.literal(true), z.literal(false)]).describe("Filter variants by visibility in the online store.").optional(),
  "archived": z.union([z.literal(true), z.literal(false)]).describe("Filter variants by archived state.").optional(),
  "fulfillment_required": z.union([z.literal(true), z.literal(false)]).describe("Filter variants by fulfillment required state.").optional()
}