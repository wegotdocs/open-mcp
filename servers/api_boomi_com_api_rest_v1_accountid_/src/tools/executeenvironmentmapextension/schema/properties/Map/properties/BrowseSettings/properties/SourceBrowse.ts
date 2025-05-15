import { z } from "zod"

export const inputParamsSchema = {
  "BrowseFields": z.array(z.object({ "name": z.string().optional(), "value": z.string().optional() })).optional(),
  "sessionId": z.string().optional()
}