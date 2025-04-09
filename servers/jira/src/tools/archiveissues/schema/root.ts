import { z } from "zod"

export const inputParams = {
  "issueIdsOrKeys": z.array(z.string()).optional()
}