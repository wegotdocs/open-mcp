import { z } from "zod"

export const inputParamsSchema = {
  "start_time": z.string().datetime({ offset: true }).describe("Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for filtering transactions, inclusive of the provided date.").optional(),
  "end_time": z.string().datetime({ offset: true }).describe("Timestamp in [ISO 8601](https://wikipedia.org/wiki/ISO_8601) format (YYYY-MM-DDThh:mm:ssZ) for filtering transactions, inclusive of the provided date.").optional()
}