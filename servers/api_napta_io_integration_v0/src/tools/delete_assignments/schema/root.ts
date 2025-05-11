import { z } from "zod"

export const inputParamsSchema = {
  "id.napta_id": z.union([z.number().int(), z.null()]).describe("Napta identifier of the Assignment. Either `id.napta_id` or `id.external_id` must be provided (but not both).").optional(),
  "id.external_id": z.union([z.string().min(1), z.null()]).describe("Unique reference of the Assignment (see [External Ids](#tag/External-Ids)).\nEither `id.napta_id` or `id.external_id` must be provided (but not both).").optional()
}