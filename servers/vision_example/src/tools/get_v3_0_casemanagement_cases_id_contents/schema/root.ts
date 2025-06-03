import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The case ID"),
  "top": z.union([z.literal(10), z.literal(50), z.literal(100)]).describe("The number of case notes retrieved per page. If no value is specified, the request retrieves a maximum of the top 50 notes.").optional(),
  "startDateTime": z.string().datetime({ offset: true }).describe("The date and time of the start of data retrieval in ISO 8601 format").optional(),
  "endDateTime": z.string().datetime({ offset: true }).describe("The date and time of the end of data retrieval in ISO 8601 format").optional(),
  "dateTimeTarget": z.enum(["createdDateTime","updatedDateTime"]).describe("A parameter that allows you to sort by either created date or updated date").optional(),
  "orderBy": z.string().max(32).describe("The fields by which the results are sorted. You can indicate multiple fields separated by commas (`,`).\n\nRecords are returned in descending order by default. To return records in ascending order, add the phrase `asc` after the parameter name.\n\nAvailable fields:\n* createdDateTime\n\nSupported operators:\n* `asc` - Ascending order\n* `desc` - Descending order\n").optional(),
  "TMV1-Filter": z.string().max(270).describe("Filter for retrieving a subset of case contents.\n\nSupported fields:\n|Field|Description|Possible values|\n|---|---|---|\n|creatorId|Creator Id of the case content|any string value|\n\nSupported operators:\n* 'eq' - Abbreviation of the operator 'equal to'\n* 'and' - Logical operator 'and'\n* 'or' - Logical operator 'or'\n* 'not' - Logical operator 'not'\n* '( )' - Symbols for grouping operands with their correct operator.\n").optional()
}