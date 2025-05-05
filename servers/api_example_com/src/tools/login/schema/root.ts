import { z } from "zod"

export const inputParamsSchema = {
  "user": z.string(),
  "password": z.string(),
  "organisation": z.string().describe("Organisation id or name to logged into").optional(),
  "code": z.string().optional()
}