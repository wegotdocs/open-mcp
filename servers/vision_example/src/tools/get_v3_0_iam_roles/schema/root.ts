import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(50), z.literal(100), z.literal(200)]).describe("The number of records displayed on a page.").optional(),
  "orderBy": z.string().max(128).describe("Specifies the field by which the results are sorted. \n\nData is displayed in ascending order by default. \n\nSupported fields and operators:\n* 'lastUpdatedDateTime'\n* asc - Ascending order\n* desc - Descending order\n").optional(),
  "TMV1-Filter": z.string().max(2048).describe("Filter for retrieving a subset of the role list.\n\nSupported fields:\n* `name` - The name of a user role\n* `id` - The unique identifier of a user role\n\nSupported operators:\n|Operator|Description|\n|-----|-----------|\n|`eq`|Operator 'equal to'|\n|`and`|Operator 'and'|\n|`or` |Operator 'or'|\n|`not`|Operator 'not'|\n|`( )`|`Symbols for grouping operands with their correct operator.`|\n").optional()
}