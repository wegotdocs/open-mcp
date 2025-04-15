import { z } from "zod"

export const inputParamsSchema = {
  "status": z.array(z.enum(["PUBLISHED","ARCHIVED","DRAFT"]).describe("The status of the project classification.")).describe("Optional set of statuses to filter by.").optional(),
  "orderBy": z.enum(["rank","-rank","+rank"]).describe("Ordering of the results by a given field. If not provided, values will not be sorted.").optional()
}