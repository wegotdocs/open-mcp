import { z } from "zod"

export const inputParamsSchema = {
  "segmentId": z.number().describe("Id of the segment."),
  "limit": z.number().describe("Number of people to retrieve.").optional(),
  "offset": z.number().describe("Number of records to skip").optional(),
  "attributes": z.array(z.string()).describe("Person Fields to retrieve. See [Person Fields](#tag/PersonFields) for possible field names.").optional(),
  "sort": z.string().optional(),
  "order": z.enum(["asc","desc"]).optional()
}