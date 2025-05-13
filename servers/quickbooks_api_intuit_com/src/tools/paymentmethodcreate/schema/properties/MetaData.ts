import { z } from "zod"

export const inputParamsSchema = {
  "CreateTime": z.string().optional(),
  "LastUpdatedTime": z.string().optional()
}