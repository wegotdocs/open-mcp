import { z } from "zod"

export const inputParamsSchema = {
  "domain": z.union([z.null(), z.string()]).optional(),
  "location": z.union([z.null(), z.string()]).optional(),
  "type": z.string()
}