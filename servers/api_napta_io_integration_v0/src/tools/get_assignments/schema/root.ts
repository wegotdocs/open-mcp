import { z } from "zod"

export const inputParamsSchema = {
  "pagination[cursor]": z.union([z.string().min(1), z.null()]).describe("Identifier of the next item to fetch").optional(),
  "pagination[limit]": z.number().int().gte(1).lte(500).describe("Maximum number of items to fetch").optional(),
  "id.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the Assignment").optional(),
  "id.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Assignments, comma separated").optional(),
  "id.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the Assignment (see [External Ids](#tag/External-Ids)).").optional(),
  "id.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Assignments, comma separated (see [External Ids](#tag/External-Ids)).").optional(),
  "user.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the User").optional(),
  "user.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Users, comma separated").optional(),
  "user.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the User (see [External Ids](#tag/External-Ids)).").optional(),
  "user.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Users, comma separated (see [External Ids](#tag/External-Ids)).").optional(),
  "project.napta_id[eq]": z.union([z.number().int().gt(0), z.null()]).describe("Filter on Napta identifier of the Project").optional(),
  "project.napta_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple Napta identifier of the Projects, comma separated").optional(),
  "project.external_id[eq]": z.union([z.string().min(1), z.null()]).describe("Filter on unique reference of the Project (see [External Ids](#tag/External-Ids)).").optional(),
  "project.external_id[in]": z.union([z.string().min(1), z.null()]).describe("Filter on multiple unique reference of the Projects, comma separated (see [External Ids](#tag/External-Ids)).").optional(),
  "simulated[eq]": z.union([z.boolean(), z.null()]).describe("Filter on whether the Assignment is simulated or not").optional()
}