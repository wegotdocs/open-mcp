import { z } from "zod"

export const inputParamsSchema = {
  "startDateTime": z.string().max(128).describe("The start of the data retrieval range, in ISO 8601 format.\n\nYou can retrieve data for tasks that were created no later than 180 days prior to the day you make the request.\n\nDefault: The beginning of the retention period of 180 days.\n").optional(),
  "endDateTime": z.string().max(128).describe("The end of the data retrieval range, in ISO 8601 format.\n\nDefault: The time you make the request\n").optional(),
  "dateTimeTarget": z.enum(["createdDateTime","lastActionDateTime"]).describe("The filter of the results").optional(),
  "top": z.union([z.literal(10), z.literal(50), z.literal(100), z.literal(200), z.literal(1000)]).describe("The number of records displayed on a page. \n\nDefault: `100`\n").optional(),
  "orderBy": z.string().max(128).describe("The field by which the results are sorted. \n\nTo display records in ascending or descending order, add the phrase `asc` or `desc` after the field name.\n\nAvailable fields:\n * `createdDateTime`\n * `lastActionDateTime`\n").optional(),
  "TMV1-Filter": z.string().max(1024).describe("The filter for retrieving a subset of the task list.\n\nSupported fields:\n\n|Field|Description|Supported values|\n|-----|-----------|----------------|\n|id|The ID of the task|Any value|\n|agentGuid|The ID of the endpoint on the Trend Vision One platform|Any value|\n|status|The status of the task|`running`,`succeeded`,`failed`|\n|action|The type of the task|`export`,`delete`|\n\nSupported operators:\n|Operator|Description|\n|-----|-----------|\n|`eq`|Operator 'equal to'|\n|`and`|Operator 'and'|\n|`or`|Operator 'or'|\n|`not`|Operator 'not'|\n|`()`|Symbols for grouping operands|\n").optional()
}