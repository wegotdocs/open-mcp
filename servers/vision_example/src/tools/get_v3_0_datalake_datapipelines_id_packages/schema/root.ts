import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique alphanumeric string that identifies a data pipeline.\n"),
  "startDateTime": z.string().datetime({ offset: true }).describe("Timestamp in ISO 8601 format that indicates the start of the data retrieval time range. You can retrieve data that was saved no earlier than 7 days ago.\n\nIf no value is specified, 'startDateTime' defaults to 15 minutes before you make the request.\n\nTip: If you have requested data before, Trend Micro recommends using **latestPackageCreatedDateTime** as the value for **startDateTime** for subsequent requests.\n").optional(),
  "endDateTime": z.string().datetime({ offset: true }).describe("Timestamp in ISO 8601 format that indicates the end of the data retrieval time range. If no value is specified, endDateTime defaults to the time you make the request.\n\nThe difference between 'startDateTime' and 'endDateTime' cannot be greater than 3600 seconds.\n\nNote: Due to processing time limitations, ensure \"endDateTime\" is set to at least 30 seconds before the request execution time.\n").optional(),
  "top": z.union([z.literal(50), z.literal(100), z.literal(200), z.literal(500)]).describe("Number of records displayed on a page. If no value is specified, 'top' defaults to 500.\n").optional()
}