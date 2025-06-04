import { z } from "zod"

export const inputParamsSchema = {
  "GroupID": z.string().regex(new RegExp("^[\\d-]{10,31}@g\\.us$")).describe("Group ID"),
  "subject": z.string().optional(),
  "description": z.string().optional()
}