import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(25), z.literal(50), z.literal(100)]).describe("The number of records displayed on a page.").optional(),
  "orderBy": z.string().max(64).describe("The fields by which the results are sorted. You can indicate multiple fields separated by commas (`,`).\n\nTo return records in descending order, add the keyword `desc` after the parameter name.\n\nAvailable fields:\n* `createdDateTime`\n* `updatedDateTime`\n").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of the rulesets list. Include this parameter in every request that generates paginated output\n\nSupported fields: \n* `name` - The name of the ruleset\n* `type` - The type of the ruleset. Supported values:  `userManaged`, `clusterManaged`\n\nSupported operators\n* `eq` - Operator \"equal to\"\n* `contains` - Operator that allows you to search for a specified string in a field\n* `or` - Operator \"or\"\n* `not` - Operator \"not\"\n").optional()
}