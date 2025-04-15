import { z } from "zod"

export const inputParamsSchema = {
  "issueIdsOrKeys": z.array(z.string()).optional()
}