import { z } from "zod"

export const inputParamsSchema = {
  "pagination[cursor]": z.union([z.string().min(1), z.null()]).describe("Identifier of the next item to fetch").optional(),
  "pagination[limit]": z.number().int().gte(1).lte(500).describe("Maximum number of items to fetch").optional(),
  "id.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the User").optional(),
  "id.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Users, comma separated").optional(),
  "id.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the User (see [External Ids](#tag/External-Ids)).").optional(),
  "id.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Users, comma separated (see [External Ids](#tag/External-Ids)).").optional()
}