import { z } from "zod"

export const inputParamsSchema = {
  "CreateTime": z.string().describe("Time the entity was created in the source domain.").optional(),
  "LastUpdatedTime": z.string().describe("Time the entity was last updated in the source domain.").optional()
}