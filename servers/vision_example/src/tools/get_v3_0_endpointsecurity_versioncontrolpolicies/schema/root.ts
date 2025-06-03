import { z } from "zod"

export const inputParamsSchema = {
  "orderBy": z.string().max(128).describe("Data is displayed in ascending order by default. To specify an order, add the operators asc or desc after a field name.\n\nSupported fields and operators: \n\n* `policyName`\n* `updatedDateTime`\n* `asc` - Ascending order\n* `desc` - Descending order\n").optional(),
  "top": z.union([z.literal(50), z.literal(100), z.literal(200)]).describe("The number of records displayed on a page.").optional()
}