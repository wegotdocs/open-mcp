import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of collection IDs to filter by.").optional(),
  "visible_in_store": z.union([z.literal(true), z.literal(false)]).describe("Filter collections by visibility in the online store.").optional(),
  "archived": z.union([z.literal(true), z.literal(false)]).describe("Filter collections by archived state.").optional()
}