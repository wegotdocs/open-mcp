import { z } from "zod"

export const inputParamsSchema = {
  "top": z.union([z.literal(10), z.literal(50), z.literal(100), z.literal(200), z.literal(500), z.literal(1000)]).describe("Number of records displayed on a page.\n\nDefault: The top 100 at-risk accounts.\n").optional(),
  "orderBy": z.string().max(128).describe("Specifies the field by which the results are sorted.\n\nSupported fields and operators:\n* 'detectedDateTime'\n* asc - Ascending order\n* desc - Descending order\n").optional(),
  "TMV1-Filter": z.string().max(1024).describe("Filter for retrieving a subset of account compromise indicators. \n\nSupported fields and operators:\n* 'id' - The ID of a user account on the Trend Vision One platform.\n* 'account' - The name of the user account.\n* 'name' - The name of the risk event.\n* 'riskLevel' - Risk level of the risk event. Supported values: \"high\", \"medium\", \"low\".\n* 'eq' - Abbreviation of the operator 'equal to'.\n* 'and' - Operator 'and'.\n* 'or' - Operator 'or'.\n* 'not' - Operator 'not'.\n* '( )' - Symbols for grouping operands.\n").optional()
}