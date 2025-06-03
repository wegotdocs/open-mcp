import { z } from "zod"

export const inputParamsSchema = {
  "orderBy": z.string().max(64).describe("The fields by which the results are sorted. You can indicate multiple fields separated by commas (`,`).\n\nTo return records in descending order, add the keyword `desc` after the parameter name.\n\nAvailable fields:\n* `createdDateTime`\n* `updatedDateTime`\n").optional(),
  "top": z.union([z.literal(25), z.literal(50), z.literal(100)]).describe("The number of records displayed on a page.").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of Amazon ECS clusters. Include this parameter in every request that generates paginated output  \n\nSupported fields:\n* `name` - The name of the Amazon ECS cluster\n\nSupported operators:\n* `eq` - Operator \"equal to\"\n* `not` - Operator \"not\"\n* `or` - Operator \"or\"\n\nSupported functions:\n* `contains` - The string partially matches\n").optional()
}