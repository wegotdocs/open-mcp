import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A comma-separated list of stage IDs to filter by (within the scope of the pipeline).").optional()
}