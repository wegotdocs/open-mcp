import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(25), z.literal(50), z.literal(100)]).describe("The number of records displayed on a page.").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of the ECS Images Occurrences List. Include this parameter in every request that generates paginated output\n\nSupported fields:\n  * `imageId` - The  The ID of the container image\n\nSupported operators:\n* `eq` - Operator \"equal to\"\n* `not` - Operator \"not\"\n* `or` - Operator \"or\"\n").optional()
}