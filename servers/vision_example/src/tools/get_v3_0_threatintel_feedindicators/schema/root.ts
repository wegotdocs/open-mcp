import { z } from "zod"

export const inputParamsSchema = {
  "startDateTime": z.string().datetime({ offset: true }).describe("The timestamp in ISO 8601 format.").describe("The data retrieval timestamp in ISO 8601 format that filters objects to only include objects added after the specified time. The default is the earliest available value for \"created\".\n").optional(),
  "endDateTime": z.string().datetime({ offset: true }).describe("The timestamp in ISO 8601 format.").describe("The data retrieval timestamp in ISO 8601 format that filters objects to only include objects added before or at the specified time. The default is the time you make the request.\n").optional(),
  "top": z.union([z.literal(1000), z.literal(5000), z.literal(10000)]).describe("The number of IoCs returned by a query (maximum 10,000 IoCs).\n").optional(),
  "indicatorObjectFormat": z.enum(["stixBundle","taxiiEnvelope"]).describe("The desired format for the query response.\n").optional()
}