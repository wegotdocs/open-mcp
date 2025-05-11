import { z } from "zod"

export const inputParamsSchema = {
  "pagination[cursor]": z.union([z.string().min(1), z.null()]).describe("Identifier of the next item to fetch").optional(),
  "pagination[limit]": z.number().int().gte(1).lte(500).describe("Maximum number of items to fetch").optional(),
  "start_date[ge]": z.union([z.string().date(), z.null()]).describe("Filter on leaves's start_date (greater or equal)").optional(),
  "start_date[le]": z.union([z.string().date(), z.null()]).describe("Filter on leaves's start_date (less or equal)").optional(),
  "end_date[ge]": z.union([z.string().date(), z.null()]).describe("Filter on leaves's end_date (greater or equal)").optional(),
  "end_date[le]": z.union([z.string().date(), z.null()]).describe("Filter on leaves's end_date (less or equal)").optional(),
  "user.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the User").optional(),
  "user.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Users, comma separated").optional(),
  "user.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the User (see [External Ids](#tag/External-Ids)).").optional(),
  "user.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Users, comma separated (see [External Ids](#tag/External-Ids)).").optional()
}