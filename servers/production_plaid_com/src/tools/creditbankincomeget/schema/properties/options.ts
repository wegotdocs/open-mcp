import { z } from "zod"

export const inputParamsSchema = {
  "count": z.number().int().describe("How many Bank Income Reports should be fetched. Multiple reports may be available if the report has been re-created or refreshed. If more than one report is available, the most recent reports will be returned first.").optional()
}